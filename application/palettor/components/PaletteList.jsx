var Ambidex = require("ambidex");
var React = require("react");

//var PaletteItem = require("./PaletteItem.jsx");

var PaletteList = React.createClass({
  mixins: [
    Ambidex.mixinCreators.connectStoresToLocalState("MyPalettes"),
  ],
  render: function() {
    return (
      <div className="PaletteList">
        <h1>Palettes</h1>
        <div className= "Palettes">
          {
            this.state.myPalettes.map(
              palette => ( 
                <div>
                  <h2>{ palette.name }</h2>
                  <ul>{
                      palette.hexList.map(
                        color => (
                          <li
                            style= {
                              {
                                width: 16,
                                height: 16,
                                margin: 8,
                                backgroundColor: color,
                                listStyle: "none"
                              }
                            }
                          />
                        )
                      )
                    }
                  </ul>
                </div>
              )
            )
          }
        </div>
      </div>
    )
  }
});

module.exports = PaletteList;

