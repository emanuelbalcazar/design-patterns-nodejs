// Logger solo de mensajes de informacion.
function Logger(name) {
    this.name = name;
}

Logger.prototype.log = function(message) {
    console.log('[info] - ' + message);
};

module.exports = Logger;
