exports.createProxy = function(subject) {

    var proto = Object.getPrototypeOf(subject);

    // constructor
    function Proxy(subject) {
        this.subject = subject;
    }

    // create a prototype
    Proxy.prototype = Object.create(proto);

    // extending the function
    Proxy.prototype.hello = function() {
        return this.subject.hello();
    };

    // delegated method
    Proxy.prototype.goodBye = function() {
        return this.subject.goodBye.apply(this.subject, arguments);
    };

    return new Proxy(subject);
};
