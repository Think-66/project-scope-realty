import { loadScript } from "@paypal/paypal-js";
import axios from "axios";

function Paypal(props) {

 loadScript({ "client-id": "AeAQJGUvtZBWH9ctbut2nqMe4voMzlgFSyt6_-mF-VGSkGUedW6dVkTsPv-J-OFxytefsavTRLGL9bE6" })
  .then((paypal) => {
   paypal.Buttons({
    createOrder: function (data, actions) {
     // Set up the transaction
     return actions.order.create({
      purchase_units: [{
       amount: {
        value: props.price
       }
      }]
     });
    },
    onApprove: function (data, actions) {
     // This function captures the funds from the transaction.
     return actions.order.capture().then(function (details) {
      // This function shows a transaction success message to your buyer.
      const obj = {
       create_time: details.create_time,
       details_id: details.id,
       payer_email_address: details.payer.email_address,
       payer_name: details.payer.name.given_name + " " + details.payer.name.surname,
       payer_id: details.payer.payer_id,
       amount: details.purchase_units[0].amount.value,
       currency_type: details.purchase_units[0].amount.currency_code,
       payment_id: details.purchase_units[0].payments.captures[0].id,
       status: details.status,
       update_time: details.update_time,
       subscription_type: props.subscription_type,
      }
      axios.post('/api/subscription/subscription', obj).then((res) => { console.log(res.data) })
      alert('Transaction completed by ' + details.payer.name.given_name);
      props.popup(false)
      props.val1('')
      props.val2('')
     });
    },
    onCancel: function (data) {
     // Show a cancel page, or return to cart
    }
   }).render("#pply");
  })
  .catch((err) => {
   console.error("failed to load the PayPal JS SDK script", err);
  });

 return (
  <div id="pply">
  </div>
 );
}

export default Paypal;