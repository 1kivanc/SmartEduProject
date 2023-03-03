const nodemailer = require('nodemailer');

exports.getIndexPage = (req,res) => {
    console.log(req.session.userID);
    res.status(200).render('index', {
        page_name: "index"
    });
}
exports.getAboutPage = (req,res) => {
    res.status(200).render('about',{
        page_name:"about"
    });
}

exports.getCoursesPage = (req,res) => {
    res.status(200).render('courses',{
        page_name:"courses"
    });
}

exports.getRegisterPage = (req,res) => {
    res.status(200).render('register',{
        page_name:"register"
    });
}
exports.getLoginPage = (req,res) => {
    res.status(200).render('login',{
        page_name:"login"
    });
}

exports.getContactPage = (req,res) => {
    res.status(200).render('contact',{
        page_name:"contact"
    });
}

exports.sendEmail = async (req,res) => {

    const email = "" 
    const password = ""
   const outputMessage = `
   <h1>Mail Details </h1>
   <ul>
        <li>Name: ${req.body.name}</li>
        <li>Email: ${req.body.email} </li>

   </ul>
   <h1>Message</h1>
   <p>${req.body.message}</p>
   `
     // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: email ,// gmail account
      pass: password // gmail pass 
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"Fred Foo 👻" <kivanc@gmail.com>', // sender address
    to: "kivanc0@gmail.com", // list of receivers
    subject: "smart edu contact From new message  ✔", // Subject line
    text: "Hello world?", // plain text body
    html:outputMessage, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview 

  res.status(200).redirect('contact');
}
