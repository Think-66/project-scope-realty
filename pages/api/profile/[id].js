import nextConnect from "next-connect";
import middleware from "../../../middleware/database";

const handler = nextConnect();

handler.use(middleware);

handler.put(async (req, res) => {
  const {
    query: { id },
    method,
  } = req;

  switch (method) {
    case "GET" /* Get a model by its ID */:
      try {
        const profile = await req.db.collection("profiles").findOne({ id });
        if (!profile) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, data: profile });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    case "PUT" /* Get a model by its ID */:
      try {
        const payload = { ...req.body };

        let doc = await req.db
          .collection("profiles")
          .updateOne({ id }, { $set: payload }, { upsert: true });

        res.status(200).json({ success: true, data: doc });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
  }
});

export default handler;

// export default async function handler(req, res) {
//   console.log("aaa");
//   const {
//     query: { id },
//     method,
//   } = req;

//   await nextConnect();

//   switch (method) {
//     case "GET" /* Get a model by its ID */:
//       try {
//         const pet = await Pet.findById(id);
//         if (!pet) {
//           return res.status(400).json({ success: false });
//         }
//         res.status(200).json({ success: true, data: pet });
//       } catch (error) {
//         res.status(400).json({ success: false });
//       }
//       break;

//     case "PUT" /* Edit a model by its ID */:
//       try {
//         // const pet = await Pet.findByIdAndUpdate(id, req.body, {
//         //   new: true,
//         //   runValidators: true,
//         // })
//         // if (!pet) {
//         //   return res.status(400).json({ success: false })
//         // }
//         let doc = await req.db
//           .collection("profiles")
//           .updateOne(
//             { date: new Date(data.date) },
//             { $set: data },
//             { upsert: true }
//           );
//         console.log(doc);
//         return res.json(doc);

//         res.status(200).json({ success: true, data: pet });
//       } catch (error) {
//         console.log(error);
//         res.status(400).json({ success: false });
//       }
//       break;

//     case "DELETE" /* Delete a model by its ID */:
//       try {
//         const deletedPet = await Pet.deleteOne({ _id: id });
//         if (!deletedPet) {
//           return res.status(400).json({ success: false });
//         }
//         res.status(200).json({ success: true, data: {} });
//       } catch (error) {
//         res.status(400).json({ success: false });
//       }
//       break;

//     default:
//       res.status(400).json({ success: false });
//       break;
//   }
// }
