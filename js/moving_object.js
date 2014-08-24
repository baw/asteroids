(function (root) {
    var Asteroids = root.Asteroids = (root.Asteroids || {});
    var MovingObject = Asteroids.MovingObject = function (options) {
        this.posX = options.pos[0];
        this.posY = options.pos[1];
        
        this.speed = options.speed ? options.speed : 0;
        this.heading = options.heading ? options.heading : 0;
        this.radius = options.radius ? options.radius : 10;
        this.color = options.color ? options.color : "#FFF";
    };
    
    MovingObject.prototype.hasFallenOffScreen = function (width, height) {
        var leastX = this.posX;
        var mostX = this.posX + (2 * this.radius);
        
        var leastY = this.posY;
        var mostY = this.posY + (2 * this.radius);
        
        return mostX  < 0     ||
               leastX > width ||
               mostY  < 0     ||
               leastY > height;
    };
    
    MovingObject.prototype.draw = function (ctx) {
        ctx.strokeStyle = this.color;
        ctx.beginPath();
        
        ctx.arc(
            this.posX,
            this.posY,
            this.radius,
            0,
            2 * Math.PI,
            false
        );
        
        ctx.stroke();
    };
    
    MovingObject.prototype.isCollidedWith = function (otherObject) {
        var distance = Math.sqrt(
            (Math.pow(this.posX - otherObject.posX, 2)) +
            (Math.pow(this.posY - otherObject.posY, 2))
        );
        
        return distance < (this.radius + otherObject.radius);
    };
    
    MovingObject.prototype.move = function () {
        var disX = this.speed * Math.cos(this.heading * (Math.PI / 180));
        var disY = this.speed * Math.sin(this.heading * (Math.PI / 180));
        
        this.posX += disX;
        this.posY += disY;
    };
})(this);
