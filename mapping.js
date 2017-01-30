/* steps: 
    get html for page http://autofill.mozdev.org/autofilltest.html and grab all input names
    extract autofill info from https://html.spec.whatwg.org/multipage/forms.html#autofill
    map input names to autofill info?
*/
var request = require('request')
var cheerio = require('cheerio');
var fs = require('fs');

var url = 'http://autofill.mozdev.org/autofilltest.html';
var output = { };
 
request(url, function(err, resp, body){
  if (!err && resp.statusCode == 200) {
      $ = cheerio.load(body);
      inputs = $('input, select');
      $(inputs).each(function(i, input){
        // the key of each element in the hash will be the ‘name’ attribute of the control.
        key = $(input).attr('name');
        output[key] = ""; // to be filled in manually in mapping.json
      });
    }
  else {
    console.log('error retrieving mozdev page.');
  }
  fs.writeFileSync('mapping.json', JSON.stringify(output, null, '\t'), 'utf8'); 
});
