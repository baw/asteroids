/*global key */

(function (root) {
    var Asteroids = root.Asteroids = (root.Asteroids || {});
    var Game = Asteroids.Game = function (canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.asteroids = [];
        this.bullets = [];
        
        this.resize();
        this.addAsteroids(30);
        var shipOptions = {
            pos: [Game.DIM_X / 2, Game.DIM_Y / 2]
        };
        this.ship = new Asteroids.Ship(shipOptions);
    };
    Game.DIM_X = 700;
    Game.DIM_Y = 400;
    Game.FPS = 1000/30;
    
    Game.prototype.addAsteroids = function (numAsteroids) {
        for (var i = 0; i < numAsteroids; i++) {
            var asteroid = Asteroids.Asteroid.randomAsteriod(Game.DIM_X,
                                                             Game.DIM_Y);
            this.asteroids.push(asteroid);
        }
    };
    
    Game.prototype.bulletsHitAsteroid = function () {
        var bulletsToRemove = [];
        for (var i = 0; i < this.bullets.length; i++) {
            for (var j = 0; j < this.asteroids.length; j++) {
                if (this.bullets[i].isCollidedWith(this.asteroids[j])) {
                    bulletsToRemove.push(i);
                    this.asteroids.splice(j, 1);
                    break;
                }
            }
        }
        
        for (var k = 0; i < bulletsToRemove.lemgth; i++) {
            this.bullets.splice(bulletsToRemove[k], 1);
        }
    };
    
    Game.prototype.checkAsteroidFallenOffScreen = function () {
        var asteroidToBeRemoved = [];
        this.asteroids.forEach(function (asteroid, index) {
            if (asteroid.hasFallenOffScreen(Game.DIM_X, Game.DIM_Y)) {
                asteroidToBeRemoved.push(index);
            }
        });
        
        var game = this;
        asteroidToBeRemoved.forEach(function (indexValue) {
            game.asteroids.splice(indexValue, 1);
        });
    };
    
    Game.prototype.checkGameOver = function () {
        if (this.shipHasCollidedWithAsteroid() ||
            this.ship.hasFallenOffScreen(Game.DIM_X, Game.DIM_Y)) {
            this.stop();
        }
    };
    
    Game.prototype.draw = function () {
        this.ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
        
        this.ship.draw(this.ctx);
        
        var game = this;
        this.asteroids.forEach(function (asteroid) {
            asteroid.draw(game.ctx);
        });
        this.bullets.forEach(function (bullet) {
            bullet.draw(game.ctx);
        });
    };
    
    Game.prototype.eventBinder = function () {
        window.addEventListener("resize", this.resize.bind(this), false);
        
        key("up", this.ship.power.bind(this.ship, 1));
        key("left", this.ship.turn.bind(this.ship, -10));
        key("down", this.ship.power.bind(this.ship, -1));
        key("right", this.ship.turn.bind(this.ship, 10));
        
        key("space", this.fireBullet.bind(this));
    };
    
    Game.prototype.fireBullet = function () {
        this.bullets.push(this.ship.fireBullet());
    };
    
    Game.prototype.move = function () {
        this.ship.move();
        
        this.asteroids.forEach(function (asteroid) {
            asteroid.move();
        });
        this.bullets.forEach(function (bullet) {
            bullet.move();
        });
    };
    
    Game.prototype.resize = function () {
        this.canvas.width = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;
        
        Game.DIM_X = this.canvas.width;
        Game.DIM_Y = this.canvas.height;
    };
    
    Game.prototype.step = function () {
        this.move();
        this.checkAsteroidFallenOffScreen();
        this.bulletsHitAsteroid();
        this.draw();
        this.checkGameOver();
    };
    
    Game.prototype.shipHasCollidedWithAsteroid = function () {
        var game = this;
        for (var i = 0; i < this.asteroids.length; i++) {
            if (this.asteroids[i].isCollidedWith(game.ship)) {
                return true;
            }
        }
        
        return false;
    };
    
    Game.prototype.start = function () {
        this.eventBinder();
        this.interval = setInterval(this.step.bind(this), Game.FPS);
    };
    
    Game.prototype.stop = function () {
        clearInterval(this.interval);
    };
})(this);
