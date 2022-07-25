const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 5000; // later put it into an env

// database part
mongoose.connect(
  "mongodb+srv://dbUser:yearbook2021@cluster0.tfcmwn3.mongodb.net/?retryWrites=true&w=majority"
); // will put this in an env later
const conn = mongoose.connection;
conn.on("error", (error) => console.log(error));
conn.once("open", () => console.log("Connected to Database!"));

// routes part
app.get("/", (req, res) => {
  res.status(200).json({
    msg: "This is the server of The Banyan IITI",
  });
});
const userRoutes = require("./routes/userRoutes");
app.use("/user", userRoutes);
const remarksRoutes = require("./routes/remarksRoutes");
app.use("/remarks", remarksRoutes);

app.listen(PORT, () => console.log("Server ready and running!"));
