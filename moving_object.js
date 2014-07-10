(function (root) {
    var Asteroids = root.Asteroids = (root.Asteroids || {});
    var MovingObject = Asteroids.MovingObject = function (options) {
        this.posX = options.pos[0];
        this.posY = options.pos[1];
        
        this.speed = options.speed ? options.speed : 0;
        this.heading = options.heading ? options.heading : 0;
        this.radius = options.radius ? options.radius : "10";
        this.color = options.color ? options.color : "#FFF";
    };
    
    MovingObject.draw = function (ctx) {
        ctx.strokeStyle = this.color;
        ctx.beginPath();
        
        var centerX = this.posX - (this.radius / 2);
        var centerY = this.posY - (this.radius / 2);
        
        ctx.arc(
            centerX,
            centerY,
            this.radius,
            0,
            2 * Math.PI,
            false
        );
        
        ctx.stroke();
    };
    
    MovingObject.isCollidedWith = function (otherObject) {
        var distance = Math.sqrt(
            (Math.pow(this.posX - otherObject.posX, 2)) +
            (Math.pow(this.posY - otherObject.posY, 2))
        );
        
        if (distance < (this.radius + otherObject.radius)) {
            return true;
        } else {
            return false;
        }
    };
})(this);
