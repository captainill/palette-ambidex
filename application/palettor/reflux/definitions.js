var Lazy = require("lazy.js");

module.exports = Lazy(
  [
    "Palettes",
    "MyPalettes",
    "CurrentPalette"
  ]
).map(
  key => [key, require(`./${ key }.js`)]
).toObject();
