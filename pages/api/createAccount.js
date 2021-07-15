// import mongoose from "mongoose";
// import { userModel } from "../../customFunctions/userModel";
// import keys from "../../config/keys";

// const User = userModel();
// mongoose.connect(process.env.DATABASE_URL);

export default async function handler(req, res) {
  //Send the data for the WooCommerce user that just purchased here
  console.log("reqest", req.body);
  res.send({
    id: 13,
    date_created: "2021-04-27T11:43:33",
    date_modified: "2021-04-27T11:43:40",
    date_modified_gmt: "2021-04-27T15:43:40",
    email: "sureshdeepalh@gmail.com",
    first_name: "Jim",
    last_name: "Braver",
    role: "customer",
    username: "jim.braver",
    billing: {
      first_name: "Jim",
      last_name: "Braver",
      company: "",
      address_1: "CB test",
      address_2: "",
      city: "San Diego",
      postcode: "92106",
      country: "",
      state: "CA",
      email: "sureshdeepalh@gmail.com",
      phone: "0763812559",
    },
    shipping: {
      first_name: "",
      last_name: "",
      company: "",
      address_1: "",
      address_2: "",
      city: "",
      postcode: "",
      country: "",
      state: "",
    },
    is_paying_customer: true,
    avatar_url: "https://secure.gravatar.com/avatar/6086bc2552e352c3c2ce09f13bd3de87?s=96&d=mm&r=g",
    meta_data: [
      { id: 147, key: "order", value: "" },
      { id: 953, key: "shipping_method", value: "" },
      { id: 954, key: "wc_last_active", value: "1619481600" },
      { id: 959, key: "ecs_instalation", value: "1619538225" },
      {
        id: 960,
        key: "ecs_notification_verification",
        value: "2021-04-27",
      },
    ],
    _links: { self: [[Object]], collection: [[Object]] },
  });
  //   if (existingUser) {
  //   }

  //   if (!existingUser) {
  //     const user = await new User({
  //       email: req.body.email,
  //       referralId: shortIdVariable,
  //       numberOfReferrals: 0,
  //     }).save();
  //   }
  //   res.writeHead(301, {
  //     Location: "/waitlist",
  //   });
  //   res.end();
}
