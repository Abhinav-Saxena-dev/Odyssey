const express = require("express");
const User = require("./../Models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const router = express.Router();

router.post("/signup", (req, res, next) => {
  const { fullName, email, password } = req.body;

  bcrypt
    .hash(password, 10)
    .then((hash) => {
      const user = new User({
        fullName: fullName,
        email: email,
        password: hash,
      });
      User.findOne({ email }).then((user1) => {
        if (user1) {
          return res
            .status(401)
            .json({ msg: "A user already exists with this email" });
        }

        user
          .save()
          .then((response) => {
            res.status(201).json({
              message: "User Successfully Created",
              response: response,
            });
          })
          .catch((err) =>
            res.status(500).json({
              error: err,
            })
          );
      });
    })
    .catch((err) =>
      res.status(500).json({
        error: err,
      })
    );
});

router.post('/login', (req, res, next) => {
    
    const {email, password} = req.body
    
    let fetchedUser;

    User.findOne({email}).then(user=>{
        if(!user){
          return res.status(401).json({
            message: "Auth failed no such user"
          })
        }
        fetchedUser=user;
        return bcrypt.compare(req.body.password, user.password);
      }).then(result=>{
        console.log(fetchedUser)
        if(!result){
          return res.status(401).json({
            message: "Auth failed inccorect password"
          })
        }
        const token = jwt.sign(
          { email: fetchedUser.email, userId: fetchedUser._id },
          process.env.ACCESS_TOKEN_SECRET,
          { expiresIn: "1h" }
        );
        res.status(200).json({
          token: token,
          expiresIn: 3600,
          userId: fetchedUser._id
        });
      })
      .catch(e=>{
       
        console.log(e)
      
      })
})
