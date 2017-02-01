/**
 * This file was used to assist in the completion of 
 * Task #1 - Form Mapping. It's purpose is to generate
 * all of the keys for the hash that is located in the
 * mapping.json file. The autofill detail tokens were then
 * filled in manually. 
 * WARNING: Running this script will replace the already completed
 * mapping.json file.
 *
 * @summary   Generate a hash object containing autofill keys.
 *
 * @author    Christopher Hranj
 */

var request = require('request');
var cheerio = require('cheerio');
var fs = require('fs');

var output = {};
request('http://autofill.mozdev.org/autofilltest.html', function(err, resp, body){
  if (!err && resp.statusCode == 200) {
      $ = cheerio.load(body);
      inputs = $('input, select');
      $(inputs).each(function(i, input){
        // the key of each element in the hash will be the ‘name’ attribute of the control.
        key = $(input).attr('name');
        output[key] = ""; //value to be filled in manually in mapping.json
      });
    }
  else {
    console.log('error retrieving mozdev page.');
  }
  fs.writeFileSync('mapping.json', JSON.stringify(output, null, '\t'), 'utf8');
});
