var axios = require('axios');
var deasync = require('deasync');
var objectUtils = require('./objectUtils');

var jokes = [];

function processStyle(styleObj) {
  var styleStr = '';
  for(var key of Object.keys(styleObj)) {
    styleStr += key + ': ' + styleObj[key] + '; '
  }
  return styleStr;
}

function embedHtml(content, config) {
  return "<form><fieldset style='" + processStyle(config.style.body) + "'>" +
         "<legend style='" + processStyle(config.style.title) +"'>开心一刻</legend>" +
         "<div style='" + processStyle(config.style.content) +"'>" + content + "</div>" +
         "</fieldset></form>";
}

function joke (config) {
  if (jokes.length === 0) {
    axios.get(config.contentApi).then(function (response) {
      jokes = objectUtils.getObjectValues(response.data, config.contentField);
    });
    deasync.loopWhile(function () {
      return jokes.length === 0
    });
  }
  return embedHtml(jokes.pop(), config);
}

module.exports = joke;
