import dbConnect from "../../../utils/dbConnect";
import Subscription from "../../../models/Subscription";


export default async function handler(req, res) {


  await dbConnect();

  switch (req.method) {
    case "GET":
      try {
        const subscription = await Subscription.find();
        if (!subscription) {
          return res.status(400).json({ success: false });
        }

        res.send(subscription)

      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "POST":
      try {
        const subscription = new Subscription(req.body)
        subscription.save().then(() => { res.status(200).json({ success: true, data: 'success' }); })

      } catch (error) {

        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false, method: method });
      break;
  }
}
