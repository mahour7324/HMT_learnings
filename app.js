const express = require("express");
const app = express(); // intance of express application
const path = require("path");
const currentpath = path.join(__dirname, "public");
// console.log(currentpath);
app.use(express.static(currentpath)); // setting path to use static files

//-------setting up body parser--------------------|
const parser = require("body-parser");
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//---------routing------------------------------------------------------------------------|

// getting data from form using get method in routing------------|but it's not recommanded
app.get("/name", (req, res) => {
  res.sendFile(`${currentpath}/name.html`);
  const name = req.query.name;//will get data in req.query
  if(name!==null){

    console.log(name);
  }
});

// getting data from form using post method in routing-----------|
app.get("/surname", (req, res) => {
  res.sendFile(`${currentpath}/surnameform.html`);// sending surnameform html file 
});
app.post("/surname", (req, res) => {
  const surname = req.body;// by post method will get data in req.body
  console.log("your surname is ", surname);
  res.sendFile(`${currentpath}/surnameform.html`);
});

//---------routing------------------------------------------------------------------------|
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
app.listen(3001, (err) => {
  if (err) {
    throw err;
  } else {
    console.log("http://localhost:3001");
  }
});
