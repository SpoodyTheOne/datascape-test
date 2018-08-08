function Collision(x,y,width,height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.thiccness = 32;


    this.checkCollision = function(other) {
        //top collision check
        if (this.x < other.x+other.
        width && this.x+this.thiccness > other.x+other.width && this.y+5 < other.y+other.height && this.y+this.height > other.y) {
            return "left";
    } else if (this.x+this.width > other.x && this.x+this.width-this.thiccness < other.x && this.y+5 < other.y+other.height && this.y+this.height > other.y) {
        return "right";
    } else if (this.y < other.y+other.height && this.y+this.thiccness > other.y+other.height && this.x < other.x+other.height && this.x+this.width > other.x) {
            return "top";
        } else if (this.y+this.height > other.y && this.y+this.height-this.thiccness < other.y && this.x < other.x+other.width && this.x+this.width > other.x) {
            return "bottom";
        }
        return false;
    }

    this.isInside = function(other) {
        if (this.x < other.x + other.width &&
            this.x + this.width > other.x &&
            this.y < other.y + other.height &&
            this.height + this.y > other.y) {
                return true;
            }
            return false;
    }

    this.show = function(x,y,bool) {
        ctx.strokeStyle = "#38ff35";
        if (x==0 && y==0&&!bool) {
            ctx.strokeRect(this.x,this.y,this.width,this.height);
        } else if (!bool&&x!=0&&y!=0){
            ctx.strokeRect(this.x+x,this.y+y,width,height);
        } else if (bool&&x!=0&&y!=0) {
            ctx.strokeRect(x,y,width,height);
        }
    }
}