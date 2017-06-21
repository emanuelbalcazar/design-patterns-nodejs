var Logger = require('./logger');  // Importo el constructor del Objeto logger.
var logger = new Logger('Default');  // Creo el Objeto logger e invoco a sus funciones.

logger.info('imprimiendo mensaje de info');
logger.error('imprimiendo mensaje de error');
logger.verbose('imprimiendo verbose');
