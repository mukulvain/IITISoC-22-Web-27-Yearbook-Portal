const express = require("express");
const cors = require('cors');
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
app.use(cors());

const PORT = 5000; // later put it into an env

// database part
mongoose.connect(
    "mongodb+srv://dbUser:yearbook2021@cluster0.tfcmwn3.mongodb.net/?retryWrites=true&w=majority"
); // will put this in an env later
const conn = mongoose.connection;
conn.on("error", (error) => console.log(error));
conn.once("open", () => console.log("Connected to Database!"));

// routes part
const userRoutes = require('./routes/userRoutes');
app.use("/user", userRoutes);

app.listen(PORT, () => console.log("Server ready and running!"));
