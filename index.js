const express = require("express");
const PORT = 3000;
const app = express();
const { connectToDatabase } = require('./db');

connectToDatabase() // Call the function to establish the database connection

const cors = require("cors");
app.use(cors());
app.use(express.json());

const indexRouter = require('./routes/index');
app.use('/', indexRouter);

app.listen(PORT, () => {
  console.log(`Server Listening on ${PORT}`);
});
