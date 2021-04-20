var resolve = require('json-refs').resolveRefs;
var YAML = require('js-yaml');
var fs = require('fs');

var root = YAML.load(fs.readFileSync('src/index.yaml').toString());
var options = {
  filter: 'relative',
  includeInvalid: true,
  relativeBase: '.',
  loaderOptions : {
    processContent : function (res, callback) {
      callback(null, YAML.load(res.text));
    }
  }
};
resolve(root, options).then(function (results) {
  yaml = YAML.dump(results.resolved)
  console.log(yaml);
  fs.writeFileSync("./swagger.yaml", yaml);
})
