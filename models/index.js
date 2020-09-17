//HUB FOR MODELS AND DB CONNECTIONS
const mongoose = require('mongoose');

const connectionString = 'mongodb://localhost:27017/reddit-db';

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: true,
})

/* LOOKING FOR FEEDBACKS */
//connected
mongoose.connection.on('connected', () => {
    console.log(`Mongoose connected to ${connectionString}`);
})
//disconnected
mongoose.connection.on('disconnected', () => {
    console.log(`Mongoose is disconnected`);
})
//error
mongoose.connection.on('error', () => {
    console.log(`Mongoose error: ${err}`);
})

//EXPORT
module.exports = {
    User: require('./User.js'),
    Post: require("./Post.js"),
    Comment: require("./Comment.js")
}
