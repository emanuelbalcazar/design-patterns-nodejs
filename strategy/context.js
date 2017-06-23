// constructor
function Context() {
    this.strategy = {};
}

// set a Strategy object
Context.prototype.setStrategy = function(strategy) {
    this.strategy = strategy;
};

// target to write a log
Context.prototype.target = function() {
    this.strategy.target();
};

// print a message log
Context.prototype.log = function(message) {
    this.strategy.log(message);
};

module.exports = new Context();
