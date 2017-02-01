/**
 * This file exports the match function used in /test/tests.js.
 * The match function takes in a hash containing metadata info
 * and returns a list of keys pertaining to credit card information.
 * Filtering is done using regular expressions.
 *
 * @summary   Filter credit card data from metadata hash.
 *
 * @author    Christopher Hranj
 */
module.exports.match = function(hash) {
  var regex = /card expire/;
  var output = [];
  Object.keys(hash).forEach(function(key) { 
      if(regex.test(key)){
        output.push(key);
      }
  });
  return output;
}