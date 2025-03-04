const mongoose = require("mongoose");
const initData = require("./data");
const Listing = require("../models/listing.js");

const MONGO_URL = 'mongodb://127.0.0.1:27017/Houses';
main().
then(() => {
  console.log("connected DB");
}).catch((Error) => {
  console.log("Error") 
})
async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async() => {
 await Listing.deleteMany({});
 initData.data = initData.data.map((obj) => 
  ({...obj, owner: "67b6c3b2708c067de3259e4f"}));
 await Listing.insertMany(initData.data);
 console.log("data was initialized");
} ;

initDB();