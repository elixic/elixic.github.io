'use strict';
var log = require('debug')('pub:email:log'),
    debug = require('debug')('pub:email:debug'),
    request = require('request'),
    listId = '91b8267f42',
    apiKey = '14766b9eca0cd94c0f08fb46ac907403-us11',
    postUrl = 'http://us11.api.mailchimp.com/3.0/lists/' + listId + '/members/';


function callback(e, r, body) {

  if (e) {
    debug(e);
  }
  //debug(r);
  debug(body);
}

function collect(req, res) {
    var payload = {
      "auth": {
        "user": "shleya",
        "pass": apiKey
      },
      "email_address": req.body.email,
      "status": "subscribed",
      "merge_fields": {}
    }
    debug(payload);
    request.post({ url: postUrl, form: payload }, callback);
    res.send(200);
}

module.exports = collect;
