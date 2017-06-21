/**
*  Ejemplo de funciones expuestas publicamente mediante el uso
*  de la exportacion por nombre. Dicha forma permite seleccionar cuales
*  funciones pueden ser publicas o privadas para el Objeto que las invoca.
**/

// Funcion privada, esta funcion no puede ser invocada desde afuera y solo es visible para este modulo.
function log() {
    console.log('log privado');
}

// Las funciones publicas se exportan utilizando 'exports.functionName' o 'module.exports.functionName'.
exports.info = function(message) {
    console.log('[info] ' + message);
};

exports.error = function(message) {
    console.log('[error] ' + message);
};

exports.verbose = function(message) {
    console.log('[verbose] ' + message);
};

// No es necesario el module.exports debido a que las funciones ya son exportadas
// individualmente.
