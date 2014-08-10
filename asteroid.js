(function (root) {
    var Asteroids = root.Asteroids = (root.Asteroids || {});
    var Asteroid = Asteroids.Asteroid = function (options) {
        options.color = Asteroid.COLOR;
        options.radius = Asteroid.RADIUS;
        
        Asteroids.MovingObject.call(this, options);
    };
    Asteroid.COLOR = "#FFF";
    Asteroid.RADIUS = 15;
    Asteroid.inherits(Asteroids.MovingObject);
    
    Asteroid.randomAsteriod = function (dimX, dimY, shipX, shipY) {
        var options = {
            pos: [],
            speed: 0,
            heading: 0
        };
        
        var asteroidTooCloseToShip = function () {
            return Asteroids.withinDistance(options.pos[0], shipX, 50) ||
                   Asteroids.withinDistance(options.pos[1], shipY, 50);
        };
        
        do {
            options.pos[0] = Asteroids.randomNumber(0, dimX);
            options.pos[1] = Asteroids.randomNumber(0, dimY);
        } while (asteroidTooCloseToShip());
        
        options.speed = Asteroids.randomNumber(1, 4);
        options.heading = Asteroids.randomNumber(0, 360);
        
        return new Asteroid(options);
    };
})(this);
