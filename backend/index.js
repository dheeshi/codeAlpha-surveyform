const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

const PORT = 5000;
app.use(cors());

app.use(bodyParser.json());

mongoose.connect(
  "mongodb+srv://dheeshi:dheeshi@survey-form.qqkegvz.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("Connected to MongoDB");
});

const Form = mongoose.model("Form", {
  username: String,
  email: String,
  tasks: String,
  experience: String,
  problem: String,
  suggestion: String,
});

app.post("/form", async (req, res) => {
  try {
    console.log(req.body);
    const { username, email, tasks, experience, problem, suggestion } =
      req.body.formData;
    console.log(username, email, tasks, experience, problem, suggestion);
    const item = await Form.create({
      username,
      email,
      tasks,
      experience,
      problem,
      suggestion,
    });

    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ error: "Could not create item" });
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
