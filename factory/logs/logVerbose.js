// Logger solo de mensajes de verbose.
function Logger(name) {
    this.name = name;
}

Logger.prototype.log = function(message) {
    console.log('[verbose] - ' + message);
};

module.exports = Logger;
