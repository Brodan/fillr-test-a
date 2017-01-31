
module.exports.match = function(hash) {
  var re = /card expire/;
  var output = []
  Object.keys(hash).forEach(function (key) { 
      if(re.test(key)){
        output.push(key)
      }
  })
  return output
}