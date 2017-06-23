// logger error
function Logger(name) {
    this.name = name;
}

Logger.prototype.log = function(message) {
    console.log('[error] - ' + message);
};

module.exports = Logger;
