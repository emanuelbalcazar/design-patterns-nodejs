var logger = require('./logger');

// Importo el decorador y le paso el objeto logger para añadirle nuevas funcionalidades.
var decorator = require('./decorator');
var decoratedLogger = decorator.decorate(logger);

logger.info('funcion original de info');
decoratedLogger.info('se mantuvo la funcion info en el nuevo logger extendido');  // Se mantuvieron las funciones del objeto original...
decoratedLogger.greetings();  // Se agrego una nueva funcion greetings() que imprime un saludo...
decoratedLogger.goodBye('foo');  // Se agrego una nueva funcion goodBye()...
