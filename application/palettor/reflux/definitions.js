var Lazy = require("lazy.js");

module.exports = Lazy(
  [
    "Palettes",
    "CurrentPalette",
    "MyPalettes"
  ]
).map(
  key => [key, require(`./${ key }.js`)]
).toObject();
