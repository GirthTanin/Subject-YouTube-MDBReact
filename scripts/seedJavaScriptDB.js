const mongoose = require("mongoose");
const db = require("../seeds");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/subject-you-tube"
  );

  const subjectYouTubeSeed = [
      {
          htmlDB,
          cssDB,
          javaScriptDB,
          reactDB
      }
  ]