(function (root) {
    var Asteroids = root.Asteroids = (root.Asteroids || {});
    var Ship = Asteroids.Ship = function (options) {
        options.color = Ship.COLOR;
        options.radius = Ship.RADIUS;
        
        Asteroids.MovingObject.call(this, options);
    };
    Ship.COLOR = "#00F";
    Ship.MAX_SPEED = 10;
    Ship.inherits(Asteroids.MovingObject);
    Ship.Shape = [[0,-8],[0,8],[16,0]];
    
    Ship.prototype.draw = function (ctx) {
        ctx.save();
        ctx.strokeStyle = Ship.COLOR;
        
        ctx.translate(this.posX, this.posY);
        ctx.rotate(this.heading * Math.PI/180);
        
        ctx.beginPath();
        
        ctx.moveTo(Ship.Shape[0][0], Ship.Shape[0][1]);
        ctx.lineTo(Ship.Shape[1][0], Ship.Shape[1][1]);
        ctx.lineTo(Ship.Shape[2][0], Ship.Shape[2][1]);
        
        ctx.closePath();
        
        ctx.stroke();
        ctx.restore();
    };
    
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
