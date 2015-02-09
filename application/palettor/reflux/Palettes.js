var Lazy = require("lazy.js");

//var PaletteModel = require("../models/PaletteModel.js");

var Palettes = {
  actions: [
    "getPalettes",
    "getAllPalettes"
  ],

  store: Object.assign({
    init: function () {
      this.state = [];
    },
    /*
    onGetPalettes: function (paletteID) {
      console.log(' -----onGetPalettes ');
      if (this.state[paletteID]) {
        this.trigger(this.state);

        if (!this.settings.CUSTOM_SETTINGS["ACTIONS_UPDATE_CACHED_DATA"]) {
          return;
        }
      }

      this.getPaletteFromAPI(paletteID).then(
        palette => {
          palette = PaletteModel.fromBikeIndex(
            palette,
            PaletteModel.DetailLevel.FULL
          );

          this.state[paletteID] = palette;
          this.trigger(this.state);
        }

      ).catch(
        error => console.error(error.stack)
      );
    },*/

    onGetAllPalettes: function () {
      this.getAllPalettesFromAPI().then(
        response => {
          this.state = response;
          this.trigger(this.state);
        }

      ).catch(
        error => {
          console.error(error.stack)
        }
      );
    },    

    /*getPaletteFromAPI: function (paletteID) {
      return this.getFromAPI(`palette/${ paletteID }/`).then(
        dict => dict.palette
      );
    },*/

    getAllPalettesFromAPI: function () {
      return this.getFromAPI('palettes').then(
        response => response
      );
    }    
  },

  require("./mixins/getFromAPI.js")
)};

module.exports = Palettes;
