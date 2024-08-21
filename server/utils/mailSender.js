const nodemailer = require("nodemailer");

const mailSender = async (email, title, body) => {
    try{
        console.log("error agya mail send krne me:1 ")
            let transporter = nodemailer.createTransport({
                host:process.env.MAIL_HOST,
                auth:{
                    user: process.env.MAIL_USER,
                    pass: process.env.MAIL_PASS,
                }
            })
            console.log("error agya mail send krne me : 2")

            const info = await transporter.sendMail({
                from:  'shwetsingh32@gmail.com', 
                to: `${email}`,
                subject: `${title}`,
                text: "Hello world?", // plain text body
                html: `${body}`,
              });
            console.log("error agya mail send krne me : 3") 
            console.log(info);
            return info;
    }
    catch(error) {
        console.log("error agya mail send krne me ")
        console.log(error.message);
    }
}


module.exports = mailSender;