const express=require('express');
const body_parser=require('body-parser');
const hbs=require('express-handlebars');
const path=require('path');
const nodemailer = require('nodemailer');

app=express();


app.set('views', './views');
app.set('view engine', 'ejs');
app.use(body_parser.urlencoded({extended:false}));
app.use(body_parser.json());
app.use('/public',express.static(path.join(__dirname,'public')));
app.get('/',(req,res)=>{
    res.render('contact');

})
app.post('/send',(req,res)=>{
console.log(req.body);

 var transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: 'sumanyadav5059@gmail.com', // generated ethereal user
            pass: "Suman@123" // generated ethereal password
        }
   });

  

   const mailOptions = {
    from: 'sumanyadav5059@gmail.com', // sender address
    to: 'sumanyadav5059@gmail.com', // list of receivers
    subject: 'Sentinel Group Management CRON', // Subject line
    text:"Hi there"
  };

    transporter.sendMail(mailOptions, function (err, info) {
      
        if(err)
        console.log(err)
        else
        console.log(info.response);
        // res.render('contact',{data:"Email sent"});
    });

   
})



app.listen(3000,(err,data)=>{
console.log("app listening on port 3000");
})