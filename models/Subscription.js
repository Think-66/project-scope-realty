import mongoose from "mongoose";


const SubcriptionsSchema = new mongoose.Schema({

 create_time: {
  type: String,
 },
 details_id: {
  type: String,
 },
 payer_email_address: {
  type: String,
 },
 payer_name: {
  type: String,
 },
 payer_id: {
  type: String,
 },
 amount: {
  type: String,
 },
 currency_type: {
  type: String,
 },
 payment_id: {
  type: String,
 },
 status: {
  type: String,
 },
 update_time: {
  type: String,
 },
 subscription_type: {
  type: String,
 }
});

export default mongoose.models.Subcriptions ||
 mongoose.model("Subcriptions", SubcriptionsSchema);
