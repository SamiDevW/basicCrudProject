// to create a model we need mongoose
const mongoose = require('mongoose')


const userDataSchema = mongoose.Schema({

    username:
    {
        type: String,
        required: [true, 'username mondatory']
    },
    email:
    {
        type: String,
        required: [true, 'need email address to authentify']
    },
    gender:
    {
        type: String,
    },
    birthdate:
    {
        type: Date
    },
    country:
    {
        type: String,
        required: [true, 'need country']
    },
    favorite_techno:
    {
        type: String,
        required: [true, 'favorite techno required']
    },
    job_title: {
        type: String,
        required: [true, 'need Job title']
    },
    annual_salary: {
        type: Number,
        required: [true, 'annual salary absent']
    },
    last_login: {
        type: Date
    }

})
// creation of the model with the moogose method (.model)
const userDataModel = mongoose.model('userData', userDataSchema)
module.exports = userDataModel;