import express from "express";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const PORT = 3000;

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.MAIL_USERNAME,
    pass: process.env.MAIL_PASSWORD,
    clientId: process.env.OAUTH_CLIENTID,
    clientSecret: process.env.OAUTH_CLIENT_SECRET,
    refreshToken: process.env.OAUTH_REFRESH_TOKEN,
  },
});

let mailOptions = {
  from: process.env.MAIL_USERNAME,
  to: "deepu@mailinator.com",
  subject: "Test Mail",
  text: "Ignore this mail please.",
};

transporter.sendMail(mailOptions, function (err, data) {
  if (err) {
    console.log("Error: " + err);
  } else {
    console.log("Email sent successfully!");
  }
});

app.listen(PORT, () => {
  console.log(`Nodemailer running @ Port ${PORT}`);
});
