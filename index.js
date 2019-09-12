var getJoke = require('./lib/joke');

var defaultStyle = {
  body: {
    width: "400px",
    padding: "10px",
    margin: "10px auto",
    border: "#000 2px dotted; border-radius: 10px"
  },
  title: {
    "font-size": "24px",
    "font-style": "italic",
    "text-shadow": "0 0 0.2em #8F7, 0 0 0.2em #8F7"
  },
  content: {}
};
var hexoConfig = hexo.config.fun_time || {style: {body: {}, title: {}, content: {}}};
var config = {
  disable: hexoConfig.disable || false,
  dynamic: hexoConfig.dynamic || false,
  contentApi: hexoConfig.content_api || "https://www.mxnzp.com/api/jokes/list/random",
  contentField: hexoConfig.content_field || "data.[].content",
  style: {
    body: Object.assign({}, defaultStyle.body, hexoConfig.style.body),
    title: Object.assign({}, defaultStyle.title, hexoConfig.style.title),
    content: Object.assign({}, defaultStyle.content, hexoConfig.style.content),
  }
};

hexo.extend.tag.register('funTime', function (args) {
  if (config.disable) {
    return "";
  }
  if (args.length !== 0) {
    if (args[0] === 'dynamic') {
      // TODO
    }
  }
  return getJoke(config);
});