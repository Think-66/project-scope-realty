import nextConnect from "next-connect";
import middleware from "../../middleware/database";
import Profile from "../../models/Profile";
import dbConnect from "../../utils/dbConnect";

const handler = nextConnect();
handler.use(middleware);
handler.get(async (req, res) => {
  await dbConnect();

  let doc = await Profile.find({});
  res.status(200).json({ success: true, data: doc });
});
export default handler;
