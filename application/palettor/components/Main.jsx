var Ambidex = require("ambidex");
var React = require("react/addons");
var ReactRouter = require("react-router");

RouteHandler = ReactRouter.RouteHandler;

var Main = React.createClass({

    render: function () {
      return  <div className = "Main">
                <div className = "Content">
                  <RouteHandler />
                </div>
                { this.props.paletteList }
              </div>;
    }
  }
);

module.exports = Main;
