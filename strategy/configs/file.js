// console log implementation, this is Strategy C.
exports.log = function(message) {
    console.log('Escribiendo ' + message + ' en un archivo.');
};

exports.target = function() {
    console.log('Archivo');
};
