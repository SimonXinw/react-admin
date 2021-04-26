var https = require('https');
var cheerio = require('cheerio');
var url = 'https://www.zhihu.com/';

https.get(url, function(res) {
  var html = '';
  res.on('data', function(chunk) {
    html += chunk;
  });

  res.on('end', function() {
    findMenu(html);
  })
})

function findMenu(htmlStr) {
  var $ = cheerio.load(htmlStr);
  var $menuMain = $('.menu_main');
  var result = [];

  $menuMain.each(function(i, item) {
    var obj = {};
    var h2Text = $(item).find('h2').text();
    h2Text = h2Text.trim();
    obj.name = h2Text;
    obj.subName = [];
    var $as = $(item).find('a');
    $as.each(function(i, item) {
      var aText = $(item).text().trim();
      obj.subName.push(aText);
    })

    result.push(obj);
  })

  console.log(result);
}