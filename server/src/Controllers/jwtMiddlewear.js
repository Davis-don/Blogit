import jwt from "jsonwebtoken";


const jwtMiddleware = (req, res, next) => {
  //const {authToken} = req.cookies;
  const authToken = req.headers["authorization"];

  if (!authToken) {
    return res.status(401).json({ message: 'Token missing. Unauthorized' });
  }

  
  jwt.verify(authToken, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ message: 'Invalid token' });
    }


    req.userId = decoded; 
    console.log(req.userId)

    next();
  });
};

export default jwtMiddleware;
