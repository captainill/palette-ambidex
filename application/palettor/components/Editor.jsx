var Ambidex = require("ambidex");
var React = require("react");

//var Editor = require("./Editor.jsx");

var Editor = React.createClass({
  mixins: [
    Ambidex.mixinCreators.connectStoresToLocalState("CurrentPalette"),
  ],
  render: function() {
    if (!this.props.paletteId) {
      return <div className="Editor">add some colors pal</div>
    }
    return (
      <div className="Editor">
        <ul className="Slides">{
          this.state.currentPalette.hexList.map( hex =>  
            <li 
              key={ hex }>
              <img src={ hex }/>
            </li>
          )
        }</ul>        
      </div>
    )
  }
});

module.exports = Editor;