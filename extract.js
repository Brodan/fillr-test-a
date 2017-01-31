var request = require('request')
var cheerio = require('cheerio');

module.exports.extract = function(window) {
  var output = { };
  request('http://autofill.mozdev.org/autofilltest.html', function(err, resp, body){
    if (!err && resp.statusCode == 200) {
      $ = cheerio.load(body);
      inputs = $('input, select');
      $(inputs).each(function(i, input){
        control_label = String($(input).parent().prev().html().trim());
        name = String($(input).attr('name'));
        output[control_label] = control_label + " " + name;
      });
    }
    else {
      console.log('error retrieving mozdev page.');
    }
    return output
  });
}
