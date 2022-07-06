const express = require("express");
const app = express();
app.use(express.json());

const PORT = 5000; // later put it into an env

const router = require("./routes");
app.use("/", router);

app.listen(PORT, () => console.log("Server ready and running!"));
