var Lazy = require('lazy.js');

var Palettes = {
  actions: [
    'getAllPalettes',
    'getPaletteById'
  ],

  store: Object.assign({
    init: function () {
      this.state = {};
    },

    onGetAllPalettes: function () {
      this.getFromPalettesAPI('palettes').then(
        response => {
          console.log('------Palettes onGetAllPalettes response=', response);
          this.state = response;
          this.trigger(this.state);
        }

      ).catch(
        error => {
          console.error(error.stack)
        }
      );
    },

    onGetPaletteById: function (id) {
      var paletteIdInState = Lazy(this.state).filter(function( obj ) {
        console.log('filter that bad girl=', obj);
        return obj._id === id;
      });

      if(paletteIdInState){
        this.state = paletteIdInState;
        this.trigger(this.state);
      }else{
        this.getFromPalettesAPI('palette/'+id).then(
          response => {
            this.state = response;
            this.trigger(this.state);
          }

        ).catch(
          error => {
            console.error(error.stack)
          }
        )
      }


    },    

    getFromPalettesAPI: function (path) {
      return this.getFromAPI(path).then(
        response => response
      );
    }
  },

  require('./mixins/getFromAPI.js')
)};

module.exports = Palettes;
