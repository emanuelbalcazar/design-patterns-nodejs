exports.decorate = function(component) {

    // object prototype
    var proto = Object.getPrototypeOf(component);

    // constructor
    function Decorator(component) {
        this.component = component;
    }

    // create a prototype from object component
    Decorator.prototype = Object.create(proto);

    // new implementation
    Decorator.prototype.greetings = function() {
        console.log('Hello!');
    };

    // new implementation
    Decorator.prototype.goodBye = function(name) {
        console.log('GoodBye ' + name);
    };

    // more implementations...

    // delegated method
    Decorator.prototype.info = function(message) {
        this.component.info(message);
    };

    return new Decorator(component);   // exports a Decorator instance
};
