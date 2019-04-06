var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kidemana@gmail.com',
    pass: 'Vipviplohan1'
  }
});

var mailOptions = {
  from: 'kidemana@gmail.com',
  to: 'kidemana@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};


module.exports = function send (toMail)  { 
mailOptions.to = toMail;
transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}
