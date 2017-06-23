// constructor
function Subject(name) {
    this.name = name;
}

Subject.prototype.hello = function() {
    console.log("hello " + this.name);
};

Subject.prototype.goodBye = function() {
    console.log("good bye!");
};

module.exports = Subject;
