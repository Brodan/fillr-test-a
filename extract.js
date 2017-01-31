var cheerio = require('cheerio');

module.exports.extract = function(window) {
  var output = { };    
    $ = cheerio.load(window.document.documentElement.outerHTML);
    inputs = $('input, select');
    $(inputs).each(function(i, input){
      control_label = String($(input).parent().prev().html().trim());
      name = String($(input).attr('name'));
      output[control_label] = control_label + " " + name;
    });
  return output
}
