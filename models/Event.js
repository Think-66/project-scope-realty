import mongoose from "mongoose";


const EventSchema = new mongoose.Schema({
 //id: String,
 name: {
  type: String,

 },
 link: {
  type: String,
 },
 description: {
  type: String,
 },
 date: {
  type: String,
 },
 startTime: {
  type: String,
 },
 endTime: {
  type: String,
 }
});

export default mongoose.models.Event ||
 mongoose.model("Event", EventSchema);
