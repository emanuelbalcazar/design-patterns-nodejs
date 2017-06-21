/**
*  Ejemplo de exportacion de un constructor en Nodejs.
*  El constructor no es mas que una funcion a la cual se le redefinen
*  las demas funciones disponibles para el 'Objeto' cuando se instancia.
**/
function Logger(name) {
    this.name = name;
}

// Funcion de log generico.
Logger.prototype.log = function(message) {
    console.log('[' + this.name + '] - ' + message);
};

Logger.prototype.info = function(message) {
    this.log('[info] ' + message);
};

Logger.prototype.error = function(message) {
    this.log('[error] ' + message);
};

Logger.prototype.verbose = function(message) {
    this.log('[verbose] ' + message);
};

module.exports = Logger;  // Exporto el constructor de Logger que puede ser invocado como new Logger().
