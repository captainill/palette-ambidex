var Ambidex = require("ambidex");
var React = require("react");

var PaletteDetail = React.createClass({
  mixins: [
    Ambidex.mixinCreators.connectStoresToLocalState("CurrentPalette"),
  ],
  render: function() {
    return (
      <div className="PaletteDetail">
        <h1>PaletteDetail</h1>
      </div>
    )
  }
});

module.exports = PaletteDetail;

