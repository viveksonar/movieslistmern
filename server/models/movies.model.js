const mongoose = require('mongoose');
const Schema = mongoose.Schema

const Movie = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        time: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            required: true
        }
    },
    {timestamps: true},
)

module.export = mongoose.model('movies', Movie)