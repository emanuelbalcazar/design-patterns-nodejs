var fs = require('fs');

function ConfigTemplate() {

}

// read a file
ConfigTemplate.prototype.read = function(file) {
    console.log('Deserializing from ' + file);
    this.data = this._deserialize(fs.readFileSync(file, 'utf-8'));
};

// write a file
ConfigTemplate.prototype.save = function(file) {
    console.log('Serealizing to ' + file);
    fs.writeFileSync(file, this._serialize(this.data));
};

// return readed data
ConfigTemplate.prototype.getData = function() {
    return this.data;
};

// template methods...
ConfigTemplate.prototype._serialize = function() {
    throw new Error('_serialize() must be implemented');
};

ConfigTemplate.prototype._deserialize = function() {
    throw new Error('_deserialize() must be implemented');
};

module.exports = ConfigTemplate;
