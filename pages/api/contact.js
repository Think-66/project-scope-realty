export default function (req, res) {
    require('dotenv').config()

    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: 'chapman1lucy1@gmail.com',
            pass: "Lucy@2021",
        },
        secure: true,
    });

    const mailData = {
        from: 'chapman1lucy1@gmail.com',
        to: 'Patryk.Kosc@myleads.io',
        subject: `Message From ${req.body.name}`,
        html: createEmailBody(req.body)
    }

    transporter.sendMail(mailData, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info);
    })

    //console.log(req.body)
    res.send('success')
}

function createEmailBody(data) {
    return `<p>Source: ${data.source}</p>` +
        `<p>Name: ${data.name}</p>` +
        `<p>Email: ${data.email}</p>` +
        `<p>Phone: ${data.phone}</p>` +
        `<p>Address:  </p>` +
        `<p>MLS Number:  </p>` +
        `<p>Notes: ${data.note}</p>`;

}