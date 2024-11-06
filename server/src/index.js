import express from "express";
import { PrismaClient } from "@prisma/client";
import cookieParser from "cookie-parser";
import bcrypt from 'bcryptjs'
import cors from 'cors'

import jwt from 'jsonwebtoken'
import jwtMiddleware from '../src/Controllers/jwtMiddlewear.js'

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());

app.use(cors({
    origin:true,
    methods:["POST", "GET", "PATCH", "PUT", "DELETE"],
    credentials:true
}))
const client = new PrismaClient();

//////////////////////////////////////////////////////////////////////Start of create user

app.post("/users", async (req, res) => {
  try {
    const { fName, lName, email, userName, password, confirmPassword } = req.body;

    
    const hashedPassword = await bcrypt.hash(password, 8);

    
    if (password === confirmPassword) {
      
      const newUser = await client.user.create({
        data: {
          firstName: fName, 
          lastName: lName,   
          email: email,      
          username: userName, 
          password: hashedPassword 
        }
      });

      res.status(201).json(newUser);
      return;
    }

    
    res.status(401).json({ message: "Password mismatch" });

  } catch (e) {
    
    if (e.code === 'P2002') {
      res.status(409).send({ message: "Similar username or email already exists." });
      return;
    }
    
    res.status(500).send({ message: e.message });
  }
});



////////////////////////////////////////////////////////////////////////////////////// start user login
app.post("/auth/login", async (req,res)=>{
try{
  const {username,password} = req.body
  const user = await client.user.findFirst({
    where: {
      OR: [
        { username: username },
        { email: username }
      ]
    }
  });
  //if user doent exist return failure
if(!user){
  res.status(401).json({message:"wrong email adress or password"})
  return;
}  
//if user exist check password
const passwordsMatch = await bcrypt.compare(password,user.password)

if (!passwordsMatch) {
  res.status(401).json({ message: "Wrong email address or password" });
  return;
}

//if password exists generate web token
const token = jwt.sign(user.id, process.env.JWT_SECRET)

//send token to cookie
res.status(200).json({ authToken: token, user });
// res.status(200).cookie("authToken",token,{httpOnly:true}).json(user)

}
catch(e){
res.status(500).json({message:e.message})
}

})

//end of user login





///////////////////////////////////////////////////////////////////////////////////start of create post

app.post("/create-post", jwtMiddleware, async (req, res) => {
  try {
    const userId = req.userId;
    console.log(userId);
    const {image, title, excerpt, body} = req.body
    
    const newPost = await client.post.create({
      data:{
        blogImg:image,
        title,
        excerpt,
        body,
        userId:parseInt(userId)
      }
    })
    res.status(201).json(newPost);
    return;
  } catch (error) {
    res.status(500).json({message: error.message});
  }
})
//end of create post

///////////////////////get post including its user details

app.get("/articles",jwtMiddleware,async (req,res)=>{
  try{
    const userId = req.userId;
    const parsedUserId = parseInt(userId, 10);
  const articles = await client.post.findMany({
    where:{
      userId:{
        //replace later
        not:parsedUserId
      }
    },
    include:{
      user:true
    }
  })
  res.status(201).json(articles)
  return;

  }
  catch(e){
    res.status(500).json({message:"error incured"})
  }
})

//end of get post
/////////////////////Get only posts sent by user

// app.get("/my-blogs", jwtMiddleware, async (req,res)=>{
  

// }
app.get("/my-blogs",jwtMiddleware, async (req,res)=>{
  try {
    const userId = req.userId;
    const parsedUserId = parseInt(userId, 10);

    const articles = await client.post.findMany({
        where: {
          //replace later
            userId: parsedUserId, 
        },
        include: {
            user: true, 
        },
    });

    res.status(200).json(articles);
} catch (e) {
    res.status(500).json({ message: "An error occurred" });
}

})

app.listen(4000, () => {
  console.log("Server is listening on port 4000");
});