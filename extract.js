/**
 * This file exports the extract function used in /test/test.js.
 * extract parses through the Mozilla autofill test page
 * and extracts control_labls and attribute names and returns
 * a hash object in the required format. 
 *
 * @summary   Extract metadata from Mozilla's autofill test page.
 *
 * @author    Christopher Hranj
 */
module.exports.extract = function(window) {
  var output = {};
  inputs = window.document.documentElement.querySelectorAll('input, select');
  for (var i = 0; i < inputs.length; i++) {
    control_label = String(inputs[i].parentNode.previousSibling.innerHTML.trim());
    name = String(inputs[i].name);
    output[control_label] = control_label + " " + name;
  }
  return output;
}
