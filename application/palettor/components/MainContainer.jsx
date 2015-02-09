var React = require("react");
var Ambidex = require("ambidex");

var Main = require("./Main.jsx");
var PaletteList = require("./PaletteList.jsx");

var MainContainer = React.createClass({
  mixins: [
    Ambidex.mixins.Reflux,
    Ambidex.mixins.Settings,
    Ambidex.mixins.Title
  ],
  sectionTitle: "Ultratext Palette Creator",
  getInitialState: function() {
    return {
      "testing": false
    };
  },
  render: function() {
    var { STATIC_URL } = this.getAmbidexSettings().CUSTOM_SETTINGS;
    return (
      <Main 
        paletteList={ <PaletteList /> }
      />
    )
  }
});

module.exports = MainContainer;