var request = require('request')
var cheerio = require('cheerio');

module.exports.extract = function(window) {
  // Write your solution to Task #2 - Extract Metadata task here
  var url = 'http://autofill.mozdev.org/autofilltest.html';

  request(url, function(err, resp, body){
    if (!err && resp.statusCode == 200) {
        $ = cheerio.load(body);
        inputs = $('input, select');
        $(inputs).each(function(i, input){
          // the key of each element in the hash will be the ‘name’ attribute of the control.
          metadata = $(input).attr('name').prev();
          //output[key] = ""; // to be filled in manually in mapping.json
          console.log(metadata);
        });
      }
    else {
      console.log('error retrieving mozdev page.');
    }
  });
}
