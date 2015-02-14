var utilities    = require("ambidex").addons.utilities;

var refluxActionsForRouterState = [
  {
    actionName:     "getMyPalettes",
    storeName:      "MyPalettes"
  },
  {
    parameterName:  "paletteID",
    actionName:     "getFromPalettesById",
    storeName:      "CurrentPalette"
  }
];

module.exports = refluxActionsForRouterState;
