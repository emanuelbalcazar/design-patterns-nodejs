var factory = require('./loggerFactory');

var loggerInfo = factory.getLogger('info');
var loggerError = factory.getLogger('error');

// todos los objetos instanciados implementan la misma funcion 'log', esto permite
// que sin importar que objeto devuelva el factory se pueda realizar una aproximacion al
// conocido polimorfismo e invocar a la funcion requerida sin preocuparse por la implementacion.
loggerInfo.log('mensaje personalizado de informacion');
loggerError.log('mensaje personalizado de error');
