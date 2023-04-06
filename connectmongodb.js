//step 1 setting Mongoclient--------------------------------------------------------------------------------------------------------------------|
const mongodb = require("mongodb");
const url = "mongodb://0.0.0.0:27017";
const connection = new mongodb.MongoClient(url); //MongoClient class is a class that allows for making Connections to MongoDB

//step 2 connecting but return promise so using async await-------------------------------------------------------------------------------------|

const connectdb = async () => {      // async becuase it return promise
  const client = await connection.connect(); //now creating connecting to db(takes time so we write --await--)
  const database = client.db("chat_app"); // taking database using db method
  const collection = database.collection("users"); //taking collection
  
//step 3 now we have collection to use it-------------------------------------------------------------------------------------------------------|

  const data = await collection.find().toArray(); // to find data takes time so write --await--
  console.log(data);
};
connectdb();
