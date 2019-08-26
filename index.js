var axios = require('axios');
var deasync = require('deasync');

var jokes = [];

function getJokes() {
  if (jokes.length === 0) {
    axios.get("https://www.mxnzp.com/api/jokes/list/random").then(function (response) {
      jokes = response.data.data;
    });
    deasync.loopWhile(function () {
      return jokes.length === 0
    });
  }
  return jokes.pop().content;
}

function embedHtml(content) {
  return "<form><fieldset style='width: 400px; padding: 10px; margin: 10px auto; border: #000 2px dotted; border-radius: 10px;'>" +
         "<legend style='font-size: 24px; text-shadow: 0 0 0.2em #8F7, 0 0 0.2em #8F7;'><i>开心一刻</i></legend><div>" +
         content +
         "</div></fieldset></form>";
}

hexo.extend.tag.register('funTime', function (args) {
  if (args.length !== 0) {
    if (args[0] === 'dynamic') {
      // TODO
      return "TODO";
    }
  } else {
    return embedHtml(getJokes());
  }
});