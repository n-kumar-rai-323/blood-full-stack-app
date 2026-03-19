const multer = require("multer");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let path = "./public";

    // create folder if it does not exist
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path, { recursive: true });
    }

    cb(null, path);
  },

  filename: (req, file, cb) => {
    let filename = Date.now() + "_" + file.originalname;
    cb(null, filename);
  },
});

const uploader = (type = "image") => {
  let allowExts = ["jpg", "jpeg", "png", "gif"];
  let fileSizeLimit = 3 * 1024 * 1024;

  if (type === "doc") {
    allowExts = ["doc", "docx", "json", "pdf", "txt"];
    fileSizeLimit = 5 * 1024 * 1024;
  } else if (type === "audio") {
    allowExts = ["mp3"];
    fileSizeLimit = 7 * 1024 * 1024;
  }

  const fileFilter = (req, file, cb) => {
    let ext = file.originalname.split(".").pop().toLowerCase();

    if (allowExts.includes(ext)) {
      cb(null, true);
    } else {
      cb(new Error("File format not supported"), false);
    }
  };

  return multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: {
      fileSize: fileSizeLimit,
    },
  });
};

module.exports = uploader;