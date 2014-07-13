(function (root) {
    var Asteroids = root.Asteroids = (root.Asteroids || {});
    var Game = Asteroids.Game = function (ctx) {
        this.ctx = ctx;
        this.asteroids = [];
        
        this.addAsteroids(30);
    };
    Game.DIM_X = 700;
    Game.DIM_Y = 400;
    Game.FPS = 1000/30;
    
    Game.prototype.addAsteroids = function (numAsteroids) {
        for (var i = 0; i < numAsteroids; i++) {
            var asteroid = Asteroids.Asteroid.randomAsteriod(Game.DIM_X,
                                                             Game.DIM_Y)
            this.asteroids.push(asteroid);
            console.log(asteroid);
        }
    };
    
    Game.prototype.draw = function () {
        this.ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
        
        var game = this;
        this.asteroids.forEach(function (asteroid) {
            asteroid.draw(game.ctx);
        });
    };
    
    Game.prototype.move = function () {
        this.asteroids.forEach(function (asteroid) {
            asteroid.move();
        });
    };
    
    Game.prototype.step = function () {
        this.move();
        this.draw();
    };
    
    Game.prototype.start = function () {
        this.interval = setInterval(this.step.bind(this), Game.FPS);
    };
})(this);
