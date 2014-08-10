(function (root) {
    var Asteroids = root.Asteroids = (root.Asteroids || {});
    
    Function.prototype.inherits = function (Parent) {
        var Surrogate = function () {};
        Surrogate.prototype = Parent.prototype;
        this.prototype = new Surrogate();
    };
    
    Asteroids.withinDistance = function (num1, num2, distance) {
      return Math.abs(num1 - num2) < distance;
    };
    
    Asteroids.randomNumber = function (min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };
})(this);
