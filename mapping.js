/* steps: 
    get html for page http://autofill.mozdev.org/autofilltest.html and grab all input names
    extract autofill info from https://html.spec.whatwg.org/multipage/forms.html#autofill
    map input names to autofill info?
*/
var request = require('request')
var cheerio = require('cheerio');

var url = 'http://autofill.mozdev.org/autofilltest.html';

request(url, function(err, resp, body){
  $ = cheerio.load(body);
  inputs = $('input, select');
  $(inputs).each(function(i, input){
    console.log($(input).attr('name'));
  });
});