require("./polyfills.js");

var React       = require("react/addons");
var ReactRouter = require("react-router");

var Route  = ReactRouter.Route;

module.exports = (
  <Route path="/" handler={ require('./palettor/components/MainContainer.jsx') }>
    <Route path="/" name="home" handler={ require('./palettor/components/Home.jsx') }/>
  </Route>
)

//    <Route path="/palette/:id/" name="viewPalette" handler={ require('./palettor/components/PaletteDetails.jsx') }/>
