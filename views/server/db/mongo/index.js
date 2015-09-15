'use strict';

var Promise = require('bluebirt'),
    mongodb = Promise.promisifyAll(require('mongodb').MongoClient),
    db_url = "mongodb://localhost:27017/test";

function connect (url) {
  return mongodb.connectAsync(url);
};

function saveEmail (email) {
  connect(db_url).then(function(db) {
    db.collection('email').insertOneAsync(email).then(function(result) {

    }).catch(function(e) {

    });
  }).catch(function(e) {

  });
};

function listEmail () {

};

function removeEmail (email) {

};

module.exports = {
  saveEmail: saveEmail,
  listEmail: listEmail,
  removeEmail: removeEmail
}
