const express = require("express");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const cloudinary = require("cloudinary").v2;

const app = express();
app.use(cors());
app.use(express.json());

cloudinary.config({
  cloud_name: process.env.CLOUDINARY,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  //   secure: true,
});

const converToBase64 = (file) => {
  return `data:${file.mimetype};base64,${file.data.toString("base64")}`;
};

app.post("‹/publish", fileUpload(), async (req, res) => {
  console.log("log req.body", req.body);
  console.log("log req.files", req.files);
  console.log(req.headers.authorization);
  const response = await cloudinary.uploader.upload(
    converToBase64(req.files.picture)
  );
  console.log("log response", response);
  res.json(response);
});

app.all("*", (req, res) => {
  res.status(404).json({ message: "This route does not exist" });
});

app.listen(3000, () => {
  console.log("Server started");
});
