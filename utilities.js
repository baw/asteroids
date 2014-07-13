(function (root) {
    var Asteroids = root.Asteroids = (root.Asteroids || {});
    
    Function.prototype.inherits = function (Parent) {
        var Surrogate = function () {};
        Surrogate.prototype = Parent.prototype;
        this.prototype = new Surrogate();
    };
})(this);
