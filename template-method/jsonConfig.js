var util = require('util');
var ConfigTemplate = require('./template');

function JsonConfig() {
    // void
}

// inherit the prototype methods from one constructor into another...
util.inherits(JsonConfig, ConfigTemplate);

JsonConfig.prototype._deserialize = function(data) {
    return JSON.parse(data);
};

JsonConfig.prototype._serialize = function(data) {
    return JSON.stringify(data, null, '');
};

module.exports = JsonConfig;
