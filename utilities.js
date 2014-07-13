(function (root) {
    var Asteroids = root.Asteroids = (root.Asteroids || {});
    
    Function.prototype.inherits = function (Parent) {
        var Surrogate = function () {};
        Surrogate.prototype = Parent.prototype;
        this.prototype = new Surrogate();
    };
    
    Asteroids.randomNumber = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
})(this);
