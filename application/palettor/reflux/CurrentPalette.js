var Lazy = require("lazy.js");

var CurrentPalette = {
  dependencies: {
    actions:   [
      "getPaletteById"
    ],

    stores: [
      "Palettes"
    ]
  },

  actions:[
    "getFromPalettesById"
  ],

  store: {
    init: function () {
      this.state = null;

      this.listenTo(
        this.parent.stores.Palettes,
        this.onPalettesUpdated
      );
    },

    onGetFromPalettesById: function (id) {
      this.parent.actions.getPaletteById(id || null);
    },

    onPalettesUpdated: function (palette) {
      this.state = palette;
      this.trigger(this.state);
    }
  }
};

module.exports = CurrentPalette;
