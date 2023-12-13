let client = require('../dbconnection');

let collection = client.db().collection('clubs');

function postclub(club, callback) {
    collection.insertOne(club,callback);
}

function getclubs(callback) {
    collection.find({}).toArray(callback);
}
module.exports = {postclub,getclubs}