// Logger again?
function Logger(name) {
    this.name = name;
}

// generic log.
Logger.prototype.log = function(message) {
    console.log('[' + this.name + '] - ' + message);
};

Logger.prototype.info = function(message) {
    this.log('[info] - ' + message);
};

Logger.prototype.error = function(message) {
    this.log('[error] - ' + message);
};

Logger.prototype.verbose = function(message) {
    this.log('[verbose] - ' + message);
};

module.exports = new Logger('Default');  // exports Logger instance
