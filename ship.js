(function (root) {
    var Asteroids = root.Asteroids = (root.Asteroids || {});
    var Ship = Asteroids.Ship = function (options) {
        options.color = Ship.COLOR;
        options.radius = Ship.RADIUS;
        
        Asteroids.MovingObject.call(this, options);
    };
    Ship.RADIUS = 5;
    Ship.COLOR = "#00F";
    Ship.MAX_SPEED = 10;
    Ship.inherits(Asteroids.MovingObject);
    
    Ship.prototype.fireBullet = function () {
        var options = {
            heading: this.heading,
            pos: [this.posX, this.posY]
        };
        
        return new Asteroids.Bullet(options);
    };
    
    Ship.prototype.power = function (impulse) {
        if (this.speed >= 1 && this.speed < Ship.MAX_SPEED) {
            this.speed += impulse;
        } else if (this.speed < 1 && impulse > 0 ) {
            this.speed += impulse;
        } else if (this.speed >= Ship.MAX_SPEED && impulse < 0) {
            this.speed += impulse;
        }
    };
    
    Ship.prototype.turn = function (turnAmmount) {
        this.heading += turnAmmount;
        if (this.heading < 0) {
            this.heading += 360;
        } else {
            this.heading = this.heading % 360 ;
        }
    };
})(this);
