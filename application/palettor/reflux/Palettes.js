var Lazy = require("lazy.js");

//var PaletteModel = require("../models/PaletteModel.js");

var Palettes = {
  actions: [
    "getAllPalettes"
  ],

  store: Object.assign({
    init: function () {
      this.state = {};
    },

    onGetAllPalettes: function () {
      this.getAllPalettesFromAPI().then(
        response => {
          console.log('response=', response);
          this.state = {'response': response};
          this.trigger(this.state);
        }

      ).catch(
        error => {
          console.error(error.stack)
        }
      );
    },

    getAllPalettesFromAPI: function () {
      return this.getFromAPI('palettes').then(
        response => response
      );
    }    
  },

  require("./mixins/getFromAPI.js")
)};

module.exports = Palettes;
