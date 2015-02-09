// Runs all app code through node-jsx, so we can use conveniences like fat-arrow lambdas

require("node-jsx").install(
  {
    "extension":  ".js",
    "harmony":    true
  }
);

require("make-node-env-global")();

if (process.argv.length == 2) {
  module.exports = require("./application/init.js");
  
} else {
  throw new Error(require("./application/settings.common.js").NAME + ' should be started with "npm start".  It does not understand "' + process.argv.join(" ") + '".');
}


