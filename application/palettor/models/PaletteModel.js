// If this was a real app, we'd convert from the API's model to
// our internal model here.

var toCamelCase = require("to-camel-case");

var camelizeKeys = function (dict) {
  var result = {};

  Object.keys(dict).forEach(
    key => {
      var value = dict[key];

      if (value && value.constructor === Object) {
        value = camelizeKeys(value);
      } else if (Array.isArray(value)) {
        value = value.map(
          item => item.constructor === Object
                    ? camelizeKeys(item)
                    : item
        );
      }

      key = toCamelCase(key);

      if (key.endsWith("Id") || key.endsWith("Url"))
        key = key.substr(0, key.length - 2) + key.substr(key.length - 2).toUpperCase()

      result[key] = value;
    }
  );

  return result;
};

var PaletteModel = function () {

};

module.exports = PaletteModel;
