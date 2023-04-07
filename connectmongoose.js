//step : 1 setting up mongoose argument for mongoose.connect method-------------------------------------------------------------------------------------|
const mongoose = require("mongoose"); // Import required modules
const mongoURI = "mongodb://0.0.0.0:27017/chat_app"; // Define MongoDB connection string and options
const mongoOptions = { useNewUrlParser: true, useUnifiedTopology: true };

//step : 2 connecting to mongodb------------------------------------------------------------------------------------------------------------------------|
mongoose
  .connect(mongoURI, mongoOptions)
  .then(() => {
    console.log("Connected to MongoDB");

    //step : 3 defining schema and model to get correct data and collection name----------------------------------------------------------------------------|
    const userSchema = new mongoose.Schema({
      // Define user schema and model
      name: String,
      email: String,
      password: String,
    });
    const User = mongoose.model("User", userSchema);

    //step : 4 now we have collection so we can performe db operations of collection -----------------------------------------------------------------------|
    User.find() // Retrieve all documents from "users" collection
      .then((users) => {
        console.log(users); // we don't need to use toArray method

        // Disconnect from MongoDB
        mongoose.disconnect();
      })
      .catch((error) => console.log(error));
  })
  .catch((error) => console.log(error));
