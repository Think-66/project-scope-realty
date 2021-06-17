import aws from "aws-sdk";

export default async function listObjects(req, res) {
  aws.config.update({
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_KEY,
    region: process.env.REGION,
    signatureVersion: "v4",
  });

  const s3 = new aws.S3();
  const list = await s3.listObjects({
    Bucket: process.env.BUCKET_NAME,
  });

  res.status(200).json(list);
}
