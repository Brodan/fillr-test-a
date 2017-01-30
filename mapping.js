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

//the key of each element in the hash will be the ‘name’ attribute of the control. 
request(url, function(err, resp, body){
  if (!err && resp.statusCode == 200) {
      $ = cheerio.load(body);
      inputs = $('input, select');
      $(inputs).each(function(i, input){
        key = $(input).attr('name')
        output[key] = 'test';
      });
    }
  else {
    console.log('error retrieving mozdev page')
  }
  fs.writeFileSync('myjsonfile.json', JSON.stringify(output), 'utf8'); //change to mapping.json at end
});

// the corresponding value for each control name key will be an ‘autofill detail token’ 
// describing your best guess at the most suitable section (optional), 
// address type (optional) and autofill field name for the control as per the WHATWG autofill spec.


