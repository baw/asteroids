(function (root) {
    var Asteroids = root.Asteroids = (root.Asteroids || {});
    var Bullet = Asteroids.Bullet = function (options) {
        options.speed = 20;
        options.color = "#0F0";
        options.radius = 2;
        Asteroids.MovingObject.call(this, options);
    };
    Bullet.inherits(Asteroids.MovingObject);
})(this);
