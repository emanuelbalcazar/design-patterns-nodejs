var context = require('./context');

// importo las diferentes implementaciones que pueden abarcar el contexto de ejecucion.
var consoleConfig = require('./configs/console');
var databaseConfig = require('./configs/database');
var fileConfig = require('./configs/file');

// seteo al contexto las diferentes implementaciones ficticias que pueden variar durante la ejecucion.
context.setStrategy(consoleConfig);
context.target();
context.log('un mensaje de log');

console.log('');

context.setStrategy(databaseConfig);
context.target();
context.log('un mensaje de log');

console.log('');

context.setStrategy(fileConfig);
context.target();
context.log('un mensaje de log');
