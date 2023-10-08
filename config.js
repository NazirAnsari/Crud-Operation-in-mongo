const mongoose = require('mongoose');
const model = require('./model');

mongoose.set("strictQuery", false);

const mongodb = "mongodb://127.0.0.1/cast";

main().catch((err)=>console.error(err));
async function main(){
    await mongoose.connect(mongodb);
    console.log("Connected");
}
