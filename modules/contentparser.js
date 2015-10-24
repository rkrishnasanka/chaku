var md = require("node-markdown").Markdown;
var fs = require('fs');
var text;

exports.parseData = function(){
  text = fs.readFile('downloads/test.md', 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
  console.log(data);
  });

  var html = md(text);
  console.log(html);
};
