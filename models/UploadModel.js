const mongoose = require("mongoose");

const uploadSchema = mongoose.Schema(
    {
        photo: {
            type: String,
            required: true
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("upload", uploadSchema);