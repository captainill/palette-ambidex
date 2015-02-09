var utilities    = require("ambidex").addons.utilities;

var refluxActionsForRouterState = [
  {
    actionName:     "getMyPalettes",
    storeName:      "MyPalettes",
    isReady:        utilities.hasContent
  }
];

module.exports = refluxActionsForRouterState;
