var React = require("react/addons");
var ReactRouter = require("react-router");
var Ambidex = require("ambidex");

var Link = ReactRouter.Link;

var PaletteItem = React.createClass({
  render: function() {
    return (
      <h1>Item</h1>
    )
  }
});

module.exports = PaletteItem;