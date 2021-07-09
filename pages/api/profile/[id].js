import dbConnect from "../../../utils/dbConnect";
import Profile from "../../../models/Profile";

export default async function handler(req, res) {
  const {
    query: { id },
    method,
  } = req;

  await dbConnect();

  switch (method) {
    case "GET":
      try {
        const profile = await Profile.findById(id);
        if (!profile) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: profile });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "PUT":
      try {
        console.log(req.body);
        const profile = await Profile.findByIdAndUpdate(
          id,
          { $set: req.body },
          {
            upsert: true,
            new: true,
            // runValidators: true,
          }
        );
        console.log(profile);
        if (!profile) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: profile });
      } catch (error) {
        console.log(error);
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false, method: method });
      break;
  }
}
