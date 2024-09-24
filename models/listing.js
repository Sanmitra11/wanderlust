const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description:String,
    image: {
        type: String,
        default:"ttps://www.istockphoto.com/photo/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-gm1297349747-390509593?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Ffree-images&utm_medium=affiliate&utm_source=unsplash&utm_term=free+images%3A%3Areduced-affiliates%3Acontrol",

        set: (v) =>
            v === "" ? "https://www.istockphoto.com/photo/hot-air-balloons-flying-over-the-botan-canyon-in-turkey-gm1297349747-390509593?utm_campaign=srp_photos_top&utm_content=https%3A%2F%2Funsplash.com%2Fs%2Fphotos%2Ffree-images&utm_medium=affiliate&utm_source=unsplash&utm_term=free+images%3A%3Areduced-affiliates%3Acontrol" :v,
        
    },
    price:Number,
    location: String,
    country:String,
});

const Listing = mongoose.model("Listing",listingSchema);
module.exports= Listing;
