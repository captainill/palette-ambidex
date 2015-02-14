var Ambidex = require("ambidex");
var React = require("react");

var Editor = require("./Editor.jsx");

var Home = React.createClass({
  render: function() {
    return (
      <div className="Home">
        <header><h1>Add colors to your palette:</h1></header>
        { <Editor paletteId={ null } /> }
      </div>
    )
  }
});

module.exports = Home;