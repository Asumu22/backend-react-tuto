const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const projetRoutes = require("./routes/ProjetRoutes");
const skillRoutes = require("./routes/SkillRoutes");
const userRoutes = require("./routes/UserRoutes");
const messageRoutes = require("./routes/MessageRoutes");
const TestimonialRoutes = require("./routes/TestimonialRoutes");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/skills", skillRoutes);
app.use("/users", userRoutes);
app.use("/messages", messageRoutes);
app.use("/projects", projetRoutes);
app.use("/experiences", TestimonialRoutes);


const connect = async () =>{
try {
  await mongoose.connect(process.env.MONGO);
  console.log('Connected to MongoDB')
} catch (error) {
  throw error;
}
};

mongoose.connection.on('disconnected', err => {
  console.log('MongoDB disconnected');
});

mongoose.connection.on('connected', err => {
  console.log('MongoDB connected');
});

app.listen(process.env.PORT, () =>{
  connect()
  console.log(`server is running in port ${process.env.PORT}`)
});




