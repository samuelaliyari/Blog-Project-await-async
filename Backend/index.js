const express = require("express");
const cors = require("cors");
const multer = require("multer");
const { postsRouter } = require("./src/routes/postsRouter");
const { usersRouter } = require("./src/routes/usersRouter");
const { controller } = require("./src/controller");
const { uploadPostImg } = require("./src/utils/multer");

const app = express();

app.use(cors());
app.use(express.static("public"))
app.use(express.json())

//Different File Pathes
const dataPath = "./posts.json"
const usersPath = "./users.json"





//request Logger
app.use((req, _, next) => {
    console.log("new REQUEST", req.url, req.method, req.body)
    next()
});

// typical get Posts request


app.use("/api/posts", postsRouter)
// typical get users request

app.use("/api/users", usersRouter)




app.use(express.static("./"))



//Delete Post



// 404 Not found handler
app.use((_, res) => {
    res.json({ success: false, error: "Page not found" })
});

// Starting Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("APP RUNNING at port " + PORT));
