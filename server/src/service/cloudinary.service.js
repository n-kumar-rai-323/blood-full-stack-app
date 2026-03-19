const cloudinary = require('cloudinary').v2;
const fs = require("fs");
const { cloudConfig } = require('../config/config');
class CloudinaryService {
    constructor() {
        cloudinary.config({
            cloud_name: cloudConfig.cloudName,
            api_key:cloudConfig.apiKey,
            api_secret: cloudConfig.apiSecret
        })
    }
    uploadFile = async (file, dir = '') => {
    try {
        const uploadResult = await cloudinary.uploader.upload(file, {
            unique_filename: true,
            folder: "bloodBank/" + dir,
        })

        if (fs.existsSync(file)) {
            fs.unlinkSync(file)
        }

        const optimizeUrl = cloudinary.url(uploadResult.public_id, {
            quality: 'auto',
            fetch_format: 'auto'
        })

        return { 
            url:uploadResult.secure_url,
            optimizeUrl:optimizeUrl
         }

    } catch (exception) {
        console.log("Cloudinary Error:", exception)

        throw {
            code: 422,
            message: exception.message || "File upload error....",
            status: "FILE_UPLOAD_ERROR"
        }
    }
}

}

const cloudinarySvc = new CloudinaryService();

module.exports = cloudinarySvc