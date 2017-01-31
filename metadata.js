var request = require('request')
var cheerio = require('cheerio');

  // Write your solution to Task #2 - Extract Metadata task here
  var url = 'http://autofill.mozdev.org/autofilltest.html';

  request(url, function(err, resp, body){
    if (!err && resp.statusCode == 200) {
        $ = cheerio.load(body);
        inputs = $('input, select');
        $(inputs).each(function(i, input){
          metadata = $(input).parent().prev().html(); ///heeeeeeeeeey this works
          console.log(metadata);
        });
      }
    else {
      console.log('error retrieving mozdev page.');
    }
  });

