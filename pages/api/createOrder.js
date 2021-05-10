import CustomerCourses from "../../models/CustomerCourses";
import connectDB from "../../middleware/mongodb";

let handler = async (req, res) => {
  let { method, body } = req;

  if (method === "POST") {
    try {
      const { customer_id, line_items } = body;

      const savedCousess = await line_items.map(async (e) => {
        const courses = new CustomerCourses({
          name: e.name,
          customerId: customer_id,
          orderId: e.product_id,
          courseId: e.product_id,
        });
        return await courses.save();
      });

      const allItems = await Promise.all(savedCousess);
      res.send(allItems);
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        message: "Something went wrong.",
        data: error,
      });
    }
  } else {
    return res.status(422).json({
      message: "Req method not supported",
    });
  }
};

export default connectDB(handler);

// export default async function handler(req, res) {
//   res.status(200).send({
//     id: 12709,
//     parent_id: 0,
//     status: "completed",
//     currency: "USD",
//     version: "5.1.0",
//     prices_include_tax: false,
//     date_created: "2021-04-27T11:43:34",
//     date_modified: "2021-04-27T11:43:41",
//     discount_total: "0.00",
//     discount_tax: "0.00",
//     shipping_total: "0.00",
//     shipping_tax: "0.00",
//     cart_tax: "0.00",
//     total: "1054.00",
//     total_tax: "0.00",
//     customer_id: 13,
//     order_key: "wc_order_pe6OazZKdSqvT",
//     billing: {
//       first_name: "Jim",
//       last_name: "Braver",
//       company: "",
//       address_1: "CB test",
//       address_2: "",
//       city: "San Diego",
//       state: "CA",
//       postcode: "92106",
//       country: "",
//       email: "sureshdeepalh@gmail.com",
//       phone: "0763812559",
//     },
//     shipping: {
//       first_name: "",
//       last_name: "",
//       company: "",
//       address_1: "",
//       address_2: "",
//       city: "",
//       state: "",
//       postcode: "",
//       country: "",
//     },
//     payment_method: "stripe",
//     payment_method_title: "Credit Card (Stripe)",
//     transaction_id: "ch_1Ikt4WA2GhIlwugrH3mVaBhm",
//     customer_ip_address: "89.46.114.44",
//     customer_user_agent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.93 Safari/537.36",
//     created_via: "checkout",
//     customer_note: "",
//     date_completed: "2021-04-27T11:43:41",
//     date_paid: "2021-04-27T11:43:37",
//     cart_hash: "3812b3cfbaf383254e33571b1beb254a",
//     number: "12709",
//     meta_data: [
//       { id: 32651, key: "is_vat_exempt", value: "no" },
//       { id: 32652, key: "billing_city", value: "San Diego" },
//       {
//         id: 32653,
//         key: "_stripe_customer_id",
//         value: "cus_JNeN4ZarHtpvH1",
//       },
//       {
//         id: 32654,
//         key: "_stripe_source_id",
//         value: "src_1Ikt4RA2GhIlwugrPUTfRunY",
//       },
//       {
//         id: 32655,
//         key: "_stripe_intent_id",
//         value: "pi_1Ikt4VA2GhIlwugrO5msL6JV",
//       },
//       { id: 32656, key: "_stripe_charge_captured", value: "yes" },
//       { id: 32657, key: "_stripe_fee", value: "47.06" },
//       { id: 32658, key: "_stripe_net", value: "1322.22" },
//       { id: 32659, key: "_stripe_currency", value: "SGD" },
//       { id: 32667, key: "_new_order_email_sent", value: "true" },
//       { id: 32668, key: "_ga_tracked", value: "1" },
//     ],
//     line_items: [
//       {
//         id: 36,
//         name: "Property and Casualty Course",
//         product_id: 12434,
//         variation_id: 0,
//         quantity: 1,
//         tax_class: "",
//         subtotal: "775.00",
//         subtotal_tax: "0.00",
//         total: "775.00",
//         total_tax: "0.00",
//         taxes: [],
//         meta_data: [],
//         sku: "",
//         price: 775,
//         parent_name: null,
//       },
//       {
//         id: 37,
//         name: "75-HR Salesperson Course - Starter Package",
//         product_id: 11930,
//         variation_id: 0,
//         quantity: 1,
//         tax_class: "",
//         subtotal: "279.00",
//         subtotal_tax: "0.00",
//         total: "279.00",
//         total_tax: "0.00",
//         taxes: [],
//         meta_data: [],
//         sku: "",
//         price: 279,
//         parent_name: null,
//       },
//     ],
//     tax_lines: [],
//     shipping_lines: [],
//     fee_lines: [],
//     coupon_lines: [],
//     refunds: [],
//     date_created_gmt: "2021-04-27T15:43:34",
//     date_modified_gmt: "2021-04-27T15:43:41",
//     date_completed_gmt: "2021-04-27T15:43:41",
//     date_paid_gmt: "2021-04-27T15:43:37",
//     currency_symbol: "$",
//     _links: {
//       self: [[Object]],
//       collection: [[Object]],
//       customer: [[Object]],
//     },
//   });
// }
