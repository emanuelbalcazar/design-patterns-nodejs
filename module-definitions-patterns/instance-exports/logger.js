/**
*  Ejemplo de exportacion de un Objeto instanciado en Nodejs.
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

module.exports = new Logger('Instance');  // Se exporta una instancia del Objeto Logger ya creado.
