/**
 * This file exports the extract function used in /test/test.js.
 * extract parses through the Mozilla autofill test page
 * and extracts control_labls and attribute names and returns
 * a hash object in the required format. 
 * cheerio is used to parse through the jsdom window
 * object in a fashion similar to jquery.
 *
 * @summary   Extract metadata from Mozilla's autofill test page.
 *
 * @author    Christopher Hranj
 */
var cheerio = require('cheerio')

module.exports.extract = function(window) {
  var output = { }    
    $ = cheerio.load(window.document.documentElement.outerHTML)
    inputs = $('input, select')
    $(inputs).each(function(i, input){
      control_label = String($(input).parent().prev().html().trim())
      name = String($(input).attr('name'))
      output[control_label] = control_label + " " + name
    })
  return output
}
