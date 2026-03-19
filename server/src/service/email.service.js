const { smtpConfig } = require("../config/config");
const nodemailer = require("nodemailer");

class EmailService {
    #transport;

    constructor() {
        try {
            const config = smtpConfig.provider === 'gmail'
                ? {
                    service: 'gmail',
                    auth: {
                        user: smtpConfig.user,
                        pass: smtpConfig.password
                    }
                }
                : {
                    host: smtpConfig.host,
                    port: Number(smtpConfig.port), // convert string to number
                    secure: smtpConfig.port == 465, // SSL for 465
                    auth: {
                        user: smtpConfig.user,
                        pass: smtpConfig.password
                    }
                };

            this.#transport = nodemailer.createTransport(config);
            console.log("Email transporter created successfully!");
        } catch (exception) {
            console.error("******** Error Connecting email service *********");
            throw exception;
        }
    }

    // Make the method async so we can await sendMail
    async sendEmail({ to, sub, message, cc = null, bcc = null, attachments = null }) {
        try {
            const body = {
                from: smtpConfig.from,
                to,
                subject: sub,
                html: message
            };

            if (cc) body.cc = cc;
            if (bcc) body.bcc = bcc;
            if (attachments) body.attachments = attachments;

            const info = await this.#transport.sendMail(body);
            console.log("Email sent successfully:", info.response);
            return info;
        } catch (exception) {
            console.error("Error sending email:", exception);
            throw {
                code: 500,
                message: exception.message || 'Error sending email',
                status: "ERROR_SENDING_EMAIL"
            };
        }
    }
}
const emailSvc=new EmailService()

module.exports = emailSvc;