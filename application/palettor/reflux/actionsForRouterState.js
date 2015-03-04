var utilities    = require("ambidex").addons.utilities;

var refluxActionsForRouterState = [
  {
    actionName:     "getMyPalettes",
    storeName:      "MyPalettes"
  },
  {
    parameterName:  "paletteID",
    actionName:     "getCurrentPalette",
    storeName:      "CurrentPalette"
  }
];

module.exports = refluxActionsForRouterState;
