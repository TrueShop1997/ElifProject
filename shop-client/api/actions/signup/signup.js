import User from '../../models/user';
import nodemailer from 'nodemailer';
import smtpTransport from 'nodemailer-smtp-transport';

export default function signup(req) {
  return new Promise((resolve, reject) => {
    const credentials = req.body;
    // sending email TODO: verification
    var options = {
      service: 'Gmail',
      auth: {
        user: 'login',
        pass: 'pass'
      }
    };
    var transporter = nodemailer.createTransport(smtpTransport(options));
    var rand,mailOptions,host,link;
    rand = Math.floor((Math.random() * 100) + 54);
    host = req.get('host');
    link = "http://"+req.get('host')+"/verify?id="+rand;
    mailOptions = {
      to : credentials.email,
      subject : 'Please confirm your Email account',
      html : 'Hello,<br> Please Click on the link to verify your email.<br><a href='+link+'>Click here to verify</a>'
    }
    console.log(mailOptions);
    transporter.sendMail(mailOptions, function(error, response) {
      if (error) {
        console.log(error);
        // res.end("error");
      } else {
        console.log("Message sent: " + response.message);
        //res.end("sent");
      }
    });
    //
    User.create(credentials, (err, user) => {
      if(err) {
        reject('error signup');
      } else {
        resolve(user);
      }
    });
  });
};
