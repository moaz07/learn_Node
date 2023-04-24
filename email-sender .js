var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "moez.test.node@gmail.com",
    pass: "#########",
  },
});

var mailOptions = {
  from: "moez.test.node@gmail.com",
  to: "#########@gmail.com",
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.log(err);
  } else {
    console.log("Email sent: " + info.response);
  }
});
