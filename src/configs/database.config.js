import mongoose from 'mongoose';


function connectToMongodb() {
  mongoose.connect("mongodb+srv://chisomsylvia95:september95@cluster0.njalblv.mongodb.net/")
  .then(() => {
    console.log("Mongodb is running");
  }) 
  .catch(() => {
    console.log("Error detected");
  })
}



export default connectToMongodb;