const express = require("express");
const mongoose = require("mongoose");
const StudentModule = require("./api/modules/student.module");
const UserModule = require("./api/modules/User.module");
const Routes = require("./api/routes/Routes");

const app = express();
app.use(express.json());
app.use('/', Routes);

const mongooseLink =
    "mongodb+srv://dmyana2003:dmyana18891@cluster0.ooafvxw.mongodb.net/";
mongoose.connect(mongooseLink);
mongoose.connection.on("connected", () => {
    console.log("mongo connected");
});

app.get("/app", (req, res) => {
    res.status(200).json({
        message: "no",
        batata: "5kg",
    })
});

app.post("/creatNewStudent", (req, res) => {
    StudentModule.create({
        name: req.body.name,
        id: req.body.id,
    }).then((response) => {
        res.status(200).json({
            message: "studet added",
        });
    });
});
app.get("/getAllUsers", (req, res) => {

    // *without find fun* //
    // try {
    //   const allUsers = await StudentModule.find();
    // } catch (error) {
    //   console.log("get all students error: ", e);
    // }       

    StudentModule.find()
        .then((stRes) => {
            console.log("");
            res.status(200).json({
                message: "done",
                users: stRes,
            });
        })
        .catch((e) => {
            console.log("get all students error: ", e);
            res.status(500).json({ error: true, errorMessage: e })
        });
});
app.post("/creatNewUser", (req, res) => {
    UserModule.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        userName: req.body.userName,
    }).then((response) => {
        res.status(200).json({
            message: "User added",
        });
    });
});

app.get("/getUsers", (req, res) => {
    UserModule.find()
        .then((stRes) => {
            console.log("");
            res.status(200).json({
                message: "done",
                users: stRes,
            });
        })
        .catch((e) => {
            console.log("get all Users error: ", e);
            res.status(500).json({ error: true, errorMessage: e })
        });
});

app.use('/likes', likeRouter);
app.use('/delete', deleteRouter);
app.use('/comments', commentRouter);
app.use('/posts', postRouter);

module.exports = app;