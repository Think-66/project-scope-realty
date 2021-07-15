import mongoose from "mongoose";

/* PetSchema will correspond to a collection in your MongoDB database. */
const ProfileSchema = new mongoose.Schema({
  id: String,
  name: {
    type: String,
    // required: [false, "Name is required."],
    // maxlength: [20, "Name cannot be more than 60 characters"],
  },
  addressLine1: {
    type: String,
  },
  addressLine2: {
    type: String,
  },
  city: {
    type: String,
  },
  zipCode: String,
  timeZone: String,
  state: String,
  country: String,
  phoneNumber: String,
  personalBillingRoutingNumber: String,
  personalBillingAccountNumber: String,
  businessBillingRoutingNumber: String,
  businessBillingAccountNumber: String,
});

export default mongoose.models.Profile ||
  mongoose.model("Profile", ProfileSchema);
