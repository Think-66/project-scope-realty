const mongoose = require("mongoose");
const { Schema } = mongoose;

export function userModel() {
  const userSchema = new Schema({
    name: String,
    email: String,
  });
    if(mongoose.models && mongoose.models.users){
      console.log("1 Fired");
      return mongoose.models.users;
    } else {
      console.log("2 Fired");
      return mongoose.model("users", userSchema);
    }
}