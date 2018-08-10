function Player(x,y,hp,speed,maxSpeed,drag,dummy,dx,dy) {
    this.hp = hp;
    this.speed = speed;
    this.maxSpeed = maxSpeed;
    this.drag = drag;
    this.dummy = dummy;
    this.dx = dx;
    this.dy = dy;
    this.x = x;
    this.y = y;
    this.onGround = false;

    this.image = new Image();

    this.image.src = "../storage/png/Player.png";

    this.draw = function(x,y) {        
        ctx.fillStyle = "#4286f4";
            if (x==0&&y==0) {
                ctx.drawImage(this.image,this.x,this.y,64,64);            
            } else {
                ctx.drawImage(this.image,x,y,64,64)
            }

        if (this.dy > 98) {
            this.dy = 98;
        } else if (this.dy < -98) {
            this.dy = -98;
        }
        if (this.dx > this.maxSpeed) {
            this.dx = this.maxSpeed;
        } else if (this.dx < -this.maxSpeed) {
            this.dx = -this.maxSpeed;
        }

        this.x += this.dx/2;
            this.y += this.dy;

           // this.x = Math.round(this.x);
          //  this.y = Math.round(this.y);

        

       if (this.dx > 0) {
           if (this.onGround) {
            this.dx -= this.drag;
           } else {
               this.dx -= this.drag/10
           }
        } else if (this.dx < -0) {
            if (this.onGround) {
            this.dx += this.drag;
            } else {
                this.dx += this.drag/10
            }
        }

        if (player.dx < 0.1 && player.dx > -0.1) {
            player.dx = 0
        }
    }

    this.move = function(m, vertical) {
            if (vertical != true) {
                if (this.onGround) {
                this.dx += m;
                } else {
                    this.dx += m/10
            }
            } else {
                this.y += m;
                this.dy += m;
            }
        }
        

}