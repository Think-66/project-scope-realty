import dbConnect from "../../../utils/dbConnect";
import Event from "../../../models/Event";


export default async function handler(req, res) {


  await dbConnect();

  switch (req.method) {
    case "GET":
      try {
        const event = await Event.find();
        if (!event) {
          return res.status(400).json({ success: false });
        }

        res.send(event)

      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "POST":
      try {
        const event = new Event(req.body)
        event.save().then(() => { res.status(200).json({ success: true, data: 'success' }); })

      } catch (error) {

        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false, method: method });
      break;
  }
}
