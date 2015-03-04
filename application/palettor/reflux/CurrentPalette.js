var Lazy = require("lazy.js");

var CurrentPalette = {
  dependencies: {
    actions:   [
      "getCurrentPaletteById"
    ],

    stores: [
      "Palettes"
    ]
  },

  actions:[
    "getCurrentPalette"
  ],

  store: {
    init: function () {
      this.state = {color: 'blue', id: 10};

      this.listenTo(
        this.parent.stores.Palettes,
        this.onPalettesUpdated
      );
    },

    onGetCurrentPalette: function (id) {
      this.parent.actions.getCurrentPaletteById(id);
    },

    onPalettesUpdated: function (palette) {
      this.state = palette;
      this.trigger(this.state);
    }
  }
};

module.exports = CurrentPalette;
