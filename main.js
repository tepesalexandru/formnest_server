const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
require("dotenv/config")
const PORT = process.env.PORT || 3001;

// Routes
const formsRoute = require("./routes/forms");
const questionsRoute = require("./routes/questions");
const answersRoute = require("./routes/answers");

app.use(cors());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

app.use("/forms", formsRoute);
app.use("/questions", questionsRoute);
app.use("/answers", answersRoute);


mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}, () => {
  app.listen(PORT, () => {
    console.log("server started!");
  });
});
