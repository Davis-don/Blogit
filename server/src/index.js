import express, { response } from "express";
import { PrismaClient } from "@prisma/client";
const app = express();
import bycript from 'bcryptjs'
const client = new PrismaClient();
import cors from 'cors'
app.use(express.json());
app.use(express.urlencoded({extended:true}))
import jwt from 'jsonwebtoken'

app.use(cors({
    origin:["http://localhost:5173"],
    methods:["POST", "GET", "PATCH", "PUT", "DELETE"],
    credentials:true
}))

//Start of create user

app.post("/users", async (req, res) => {
  try {
    const {fName,lName,email,userName, password, confirmPassword}=req.body;
    const hashedPassword =await bycript.hash(password,8)

    if(password === confirmPassword){
    const newUser = await client.user.create({
        data:{
            first_Name:fName,
            last_Name:lName,
            Email:email,
            user_Name:userName,
            password:hashedPassword
        }
    })
     res.status(201).json(newUser)
     return ;
    }
    res.status(401).json({message:"Password mismatch"})

  } catch (e) {
    if(e.code === 'P2002'){
     res.status(500).send({message:"Similar username or Email"});
     return;
    }
      res.status(500).send(e.message);
    
  }
});

//end of create user

// start user login
app.post("/auth/login", async (req,res)=>{
try{
  const {username,password} = req.body
  const user = await client.user.findFirst({
    where: {
      OR: [
        { user_Name: username },
        { Email: username }
      ]
    }
  });
  //if user doent exist return failure
if(!user){
  res.status(401).json({message:"wrong email adress or password"})
  return;
}  
//if user exist check password
const passwordsMatch = await bycript.compare(password,user.password)

if (!passwordsMatch) {
  res.status(401).json({ message: "Wrong email address or password" });
  return;
}

//if password exists

//generate user token
const token = jwt.sign(user.id, process.env.JWT_SECRET)
//send token to cookie

res.status(200).cookie("authtoken",token,{httpOnly:true}).json(user)

}
catch(e){
res.status(500).json({message:"something went wrong"})
}

})

//end of user login

app.post("/post",(req,res)=>{
  console.log(req.body);
})

app.listen(4000, () => {
  console.log("Server is listening on port 4000");
});