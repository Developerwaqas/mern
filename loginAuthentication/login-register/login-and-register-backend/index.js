import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import bcrypt from "bcrypt"


const saltRounds = 10;

const app = express()
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())
// mongoose connection
mongoose.connect("mongodb://localhost:27017/myLoginRegisterDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => {
    console.log("DB connected")
})
// mongoose schema to form input type
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String
})

const User = new mongoose.model("User", userSchema)

//Route for login api

app.post("/login", async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      console.log(user);
      if (user) {
        const cmp = await bcrypt.compare(req.body.password, user.password);
        if (cmp) {
          //   ..... further code to maintain authentication like jwt or sessions
          res.send({message: "Login Successful", user: user})
        } else {
            res.send({ message: "Password didn't match"})
        }
      } else {
        es.send({message: "User not registered"})
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server error");
    }
  });

//Route for register api
app.post("/register", async  (req, res)=> {
    const hashedPwd = await bcrypt.hash(req.body.password, saltRounds);
    const { name, email ,password} = req.body
    User.findOne({email: email}, (err, user) => {
        if(user){
            res.send({message: "User already registered"})
        } else {
            const user = new User({
                name,
                email,
               password:hashedPwd
            })
            user.save(err => {
                if(err) {
                    res.send(err)
                } else {
                    res.send( { message: "Successfully Registered, Please login now." })
                    console.log(user)
                }
            })
        }
    })
    
}) 


app.listen(9002,() => {
    console.log("BE started at port 9002")
})