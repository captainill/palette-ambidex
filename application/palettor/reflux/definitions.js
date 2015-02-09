var Lazy = require("lazy.js");

module.exports = Lazy(
  [
    "Palettes",
    "MyPalettes"
  ]
).map(
  key => [key, require(`./${ key }.js`)]
).toObject();
