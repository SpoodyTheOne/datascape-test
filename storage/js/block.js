function Block(x,y,type) {
    if (!type instanceof blockType) {
        return "Argument 3 is invalid";
    }
    this.x = parseInt(x);
    this.y = parseInt(y);
    this.type = type;
    this.destroyed = false;
    this.collision = new Collision(this.x*64,this.y*64,64,64);

    if (this.type.name == "Water") {
        this.collision.height = 40;
    }
    this.draw = function(x,y) {
        ctx.drawImage(type.image,this.x*64-x,this.y*64-y,64,64);
    }

    this.destroy = function(inv,bool) {
        if (!inv instanceof Inventory) {
            return "argument 1 is invalid";
        }
        if (bool) {
            this.destroyed = true;
        } else {
            this.destroyed = true;
            inv.addItem(this.type.item,1)
        }
    }

}