const express = require("express");
const app = express();
const mongoose = require("mongoose");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
const LocalStrategy = require("passport-local");
const user = require("./models/user.js");
const UserRouter = require("./routes/user.js");

app.get("/" , (req, res) => {
    res.send("hii, i am root");
})

app.use(session(sessionOptions));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(user.authenticate()));

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use("/",UserRouter);

main().then(() => {
    console.log("connected to DB");
}).catch((err) =>{
    console.log(err);
})

const MONGO_URL = " mongodb://127.0.0.1:27017/nexora ";
async function main() {
    await mongoose.connect(MONGO_URL );
    
}

app.listen(8080, ()=> {
    console.log("server is listening to port 3002")
})