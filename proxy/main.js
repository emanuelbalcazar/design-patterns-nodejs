var proxy = require('./proxy');
var Subject = require('./subject');

var subject = new Subject('foo');
var proxyInstance = proxy.createProxy(subject);

// ejecuto las funciones a traves del proxy.
proxyInstance.hello();
proxyInstance.goodBye();
