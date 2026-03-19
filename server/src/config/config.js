require("dotenv").config()

const cloudConfig = {
    cloudName: process.env.CLOUDINARY_CLOUD_NAME,
    apiKey: process.env.CLOUDINARY_API_KEY,
    apiSecret: process.env.CLOUDINARY_API_SECRET
}

const smtpConfig={
    provider:process.env.SMTP_PROVIDER,
    host:process.env.SMTP_HOST,
    port:Number(process.env.SMTP_PORT),
    user:process.env.SMTP_USER,
    password:process.env.SMTP_PASSWORD,
    from:process.env.SMTP_FROM
}

module.exports ={ cloudConfig, smtpConfig}
