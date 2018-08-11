function Block(x,y,type,stats) {
    if (!type instanceof blockType) {
        return "Argument 3 is invalid";
    }
    this.x = parseInt(x);
    this.y = parseInt(y);
    this.type = new blockType(type.image.src,type.name,type.item,type.time,type.stats);
    this.destroyed = false;
    if (typeof stats != Object) {
        this.stats = {};
    } else {
    this.stats = stats;
    }
    this.collision = new Collision(this.x*64,this.y*64,64,64);

    if (type.name == "Water") {
        this.collision.height = 50;
        this.collision.y += 14;
    }
    if (type.name.toLowerCase() == "electric furnace" || type.name.toLowerCase() == "extreme furnace") {
        this.collision.height = 48;
        this.collision.width=44;
        this.collision.x+=10;
        this.collision.y+=12;
    }
    this.draw = function(x,y) {
        ctx.drawImage(this.type.image,this.x*64-x,this.y*64-y,64,64);
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