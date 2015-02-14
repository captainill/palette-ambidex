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

      this.listenTo(
        this.parent.stores.Palettes,
        this.onPalettesUpdated
      );
    },

    onGetMyPalettes: function () {
      this.parent.actions.getAllPalettes();
    },

    onPalettesUpdated: function (palettes) {
      console.log('------MyPalettes onPalettesUpdated', palettes);
      this.state = palettes;
      this.trigger(this.state);
    }
  }
};

module.exports = MyPalettes;
