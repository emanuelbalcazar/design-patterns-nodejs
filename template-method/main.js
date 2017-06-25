var JsonConfig = require('./jsonConfig');
var jsonConfig = new JsonConfig();

var data = jsonConfig.read('./person.json');

console.log('data ', jsonConfig.getData());

jsonConfig.save('./person.json');
