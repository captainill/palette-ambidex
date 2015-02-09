var Lazy = require("lazy.js");

var MyPalettes = {
  dependencies: {
    actions:   [
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
      return this.parent.actions.getAllPalettes();
    }
  }
};

module.exports = MyPalettes;
