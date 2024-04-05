import { Schema, model, Document } from 'mongoose'

const userSchem = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }

})


export const User = model('User', userSchem)