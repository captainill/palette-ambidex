var Lazy = require("lazy.js");

var MyPalettes = {
  dependencies: {
    actions:   [
      "getPalettes",
      "getAllPalettes"
    ],

    stores: [
      "Palettes"
    ]
  },

  actions:[
    "getMyPalettes"
  ],

  store: {
    init: function () {
      this.state = [];
    },

    onGetMyPalettes: function () {
      this.parent.actions.getAllPalettes();
    }
  }
};

module.exports = MyPalettes;
