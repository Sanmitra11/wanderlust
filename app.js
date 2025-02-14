const express = require("express");
const app = express();
const mongoose = require("mongoose");

const Listing = require("./models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
.then(() =>{
    console.log("connected to DB");
})
.catch((err) =>
{
    console.log(err);
} )
async function main() {
    await mongoose.connect(MONGO_URL);
};

app.get("/", (req , res) =>
{
    res.send("Hi, I am root");
});

app.get("/testListing", async (req, res) => {
    let sampleListing = new Listing({
        title:"My new villa",
        description:"near beach",
        price: 1500,
        location: "Goa",
        country: "India",
    });
    await sampleListing.save();
    console.log("Sample was saved");
    res.send("Testing Successful");
})
app.listen(8080, () => {
    console.log("server is listening to port 8080");
});
