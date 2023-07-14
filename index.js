const express = require("express");
const PORT = 3000;
const app = express();
const db=require('./db');



app.listen(PORT, async () => {
  console.log(`server up on port ${PORT}`);
});