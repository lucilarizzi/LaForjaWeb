const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//




const nodemailer = require('nodemailer');
const cors = require('cors')({ origin: true });
const gmailEmail = "laforjaequiposweb@gmail.com";
const gmailPassword = "gppsstznizeftrkj";
const mailTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: gmailEmail,
        pass: gmailPassword
    }
});


exports.submit = functions.https.onRequest((req, res) => {

    res.set('Access-Control-Allow-Origin', '*');
    res.set('Access-Control-Allow-Credentials', 'true');

    cors(req, res, () => {
        if (req.method !== 'POST') {
            return;
        }

        const mailOptions = {
            from: req.body.email,
            replyTo: req.body.email,
            to: "laforjaequipos@gmail.com",
            subject: `laforja.com.ar recibio un mensaje. Asunto ${req.body.asunto}`,
            text: req.body.nombre,
            html: `<b>El contacto ${req.body.nombre} envio el siguiente mensaje '${req.body.message}'</b>`
        };

        mailTransport.sendMail(mailOptions);
        res.status(200).send({ isEmailSend: true });

    });
});