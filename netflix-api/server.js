const express = require("express");
const cors = require("cors");
const userRoutes = require ("./routes/UserRoutes") ;
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

mongoose
    .connect("mongodb://127.0.0.1:27017/netflix", {
        useNewUrLParser: true,
        useUnifiedTopology: true,

    })
    .then(() => {
        console.log("DB Connected");
    })  

app.use("/api/user", userRoutes);

app.listen(4000, () => {
    console.log("server started on port 4000");
});
