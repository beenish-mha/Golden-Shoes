require("dotenv").config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

const shoeRoute = require ("./routes/shoes");


app.use(cors())
app.use(express.json());


app.use("/shoes", shoeRoute);


//database connection
mongoose
  .connect(process.env.DB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));
 
//listning to the port
app.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}!`);
});
