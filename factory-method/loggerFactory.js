var LogInfo = require('./logs/logInfo');
var LogError = require('./logs/logError');
var LogVerbose = require('./logs/logVerbose');

// Retorna una implementacion de log acorde al nivel solicitado, en caso de no
// existir alguna implementacion retorna null.
exports.getLogger = function(level) {
    
    switch (level) {
        case 'info':
            return new LogInfo('Default');
        case 'error':
            return new LogError('Default');
        case 'error':
            return new LogVerbose('Default');
        default:
            return null;
    }
};
