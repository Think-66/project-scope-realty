import { Vimeo } from "vimeo";

export default async function handler(req, res) {
  var client = new Vimeo(
    "febbfbc02c49ce9fe3eb6baf6abcdb963a2701e9",
    "P+uWtAwkSztayaa4eOsvhdBX62YjcsMaKQs1xhv4bA7Fs84vCl6fv3kWHgimaqTslDZcO6AQEwgr6DYnyUczU2ar7IxTGEEdT9Mx0sC2OPVsTe3FYToRaXioKXpTMe2B",
    "d416e606cfb0995d6dbc367e24233545"
  );

  await client.request(
    {
      method: "GET",
      path: "users/137669659/videos",
      query: {
        fields: "link,resource_key,name,duration",
      },
    },
    function (error, body, status_code) {
      if (error) {
        console.log(error);
        res.send(error);
        res.status(status_code).send(error);
      }
      console.log(body);
      res.status(status_code).send(body);
    }
  );
}
