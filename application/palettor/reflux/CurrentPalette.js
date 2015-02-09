var Lazy = require("lazy.js");

var CurrentPalette = {
  dependencies: {
    actions:[
      "getPalettes"
    ],

    stores:[
      "Palettes"
    ]
  },

  actions: [
    // Can't use getBike because that collides with the MyBikes hack
    "viewPalette"
  ],

  store: {
    init: function () {
      // Maybe state needs to be broken up into two concerns:
      // - what should be hydrated/dehydrated
      // - what was the last thing triggered

      this.state = null;

      this.listenTo(
        this.parent.stores.Palettes,
        this.onPaletteUpdated
      );
    },

    onViewPalette: function (paletteID) {
      this.paletteID = paletteID;

      this.state = this.parent.stores.Palettes.state[this.paletteID];
      this.trigger(this.state);

      if (!this.state) {
        this.parent.actions.getPalette(this.paletteID);
      }
    }
  }
};

module.exports = CurrentPalette;

