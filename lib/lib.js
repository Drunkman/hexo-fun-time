var axios = require('axios');
var deasync = require('deasync');

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

function getJoke (config) {
  if (jokes.length === 0) {
    axios.get(config.contentApi).then(function (response) {
      jokes = response.data.data;
    });
    deasync.loopWhile(function () {
      return jokes.length === 0
    });
  }
  return embedHtml(jokes.pop().content, config);
}

module.exports = getJoke;
