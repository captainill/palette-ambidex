var mach = require("mach");

module.exports = {
  getFromAPI: function (path) {
    console.log('-----getFromAPI path=', this.settings.CUSTOM_SETTINGS.API_BASE_URL + path );
    return mach.get(
      this.settings.CUSTOM_SETTINGS.API_BASE_URL + path 
    ).then(
      connection => {
        console.log('----- response=', JSON.parse(connection.responseText) );
        return JSON.parse(connection.responseText);
      }
    );

  }
};
