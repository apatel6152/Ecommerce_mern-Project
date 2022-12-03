const nodeMailer = require("nodemailer");
const sendgridtransport = require('nodemailer-sendgrid-transport');

const sendEmail = async (options) => {

  const transporter = nodeMailer.createTransport(
    sendgridtransport({
      auth: {
        api_key: process.env.sendgrid_api,
      },
    })
  );
  // const transporter = nodeMailer.createTransport({
  //   host: process.env.SMPT_HOST,
  //   port: process.env.SMPT_PORT,
  //   secure: true,
  //   service: process.env.SMPT_SERVICE,
  //   auth: {
  //     user: process.env.SMPT_MAIL,
  //     pass: process.env.SMPT_PASSWORD,
  //   },
  // });

  const mailOptions = {
    from: process.env.SENDGRID_MAIL,
    to: options.email,
    subject: options.subject,
    html: options.message,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;