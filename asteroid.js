(function (root) {
    var Asteroids = root.Asteroids = (root.Asteroids || {});
    var Asteroid = Asteroids.Asteroid = function (options) {
        options.color = Asteroid.COLOR;
        options.radius = Asteroid.RADIUS;
        
        Asteroids.MovingObject.call(this, options);
    };
    Asteroid.COLOR = "#000";
    Asteroid.RADIUS = 15;
    Asteroid.inherits(Asteroids.MovingObject);
    
    Asteroid.randomAsteriod = function (dimX, dimY) {
        var options = {
            pos: [],
            speed: 0,
            heading: 0
        }
        
        options.pos[0] = Asteroids.randomNumber(0, dimX);
        options.pos[1] = Asteroids.randomNumber(0, dimY);
        
        options.speed = Asteroids.randomNumber(1, 4);
        options.heading = Asteroids.randomNumber(0, 360);
        
        return new Asteroid(options);
    };
})(this);
