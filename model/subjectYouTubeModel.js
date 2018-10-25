const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var SubjectYouTubeSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    tutor: {
        type: String,
    required: true
    },
    series: {
        type: Boolean,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    useful: {
        type: number
    },
    notUseful: {
        type: number
    },
    seriesId: {
        type: String,
        required: false
    }
});

var SYTModel = mongoose.model("SYTModel", SubjectYouTubeSchema);

module.exports = SYTModel;
