function Inventory(x,y,width,height,items) {
    if (items instanceof Array) {
    this.items = items;
    } else {
        console.error("Argument 1 must be of type Array")
    }
    if (items.length > 35) {
        console.error("Items exceed maximun inventory space (35)");
    }
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.isOpen = false;
    this.equipedItem = "none";
    var aditem = null;

    this.addItem = function(item,amount) {
        if (item instanceof itemType) {
        for (i=0;i<this.items.length;i++) {
        if (item == this.items[i].type) {
            if (this.items[i].type.max == this.items[i].amount) {
                
            } else {
            this.items[i].amount += amount;
            return;
            }
        }
        }
        this.items.push(new Item(item,amount));
    } else {
        return "Argument wasn't of type Item";
    }
    }

    this.removeItem = function(item,amount) {
        if (item instanceof Item) {
        for (i=this.items.length-1;i>=0;i--) {
            if (item.type == this.items[i].type) {
                this.items[i].amount -= amount;
                if (this.items[i].amount <= 0) {
                    this.items.splice(i,1);
                    inventory.equipedItem = "none";
                }
                break;
            }
        }
    } else {
        return "Argument 1 was invalid";
    }
    }

    this.draw = function() {
        if (this.isOpen) {
        ctx.fillStyle = "#444444";
        ctx.strokeStyle = "#4286f4";
        ctx.lineWidth = 2;
        ctx.fillRect(this.x,this.y,this.width,this.height);
        ctx.strokeRect(this.x,this.y,this.width,this.height);
            ctx.fillStyle = "#555555";
            var index = 0;
            for (c=0;c<5;c++) {
        index++;
        for (r=0;r<7;r++) {
                index++;
                i = index-2;
                if (i >= 8 ) {
                    i--;
                }
                if (i >= 15) {
                    i--;
                }
                if (i >= 22) {
                    i--;
                }
                
                var x = (23 + 5.777*(r+1) + 64*(r));
                var y = (125*(c+1))-(45*c);
                ctx.fillStyle = "#555555";
                if (mouseX > x && mouseX < x+64 && mouseY > y && mouseY < y+64) {
                    if (this.items.length >= i +1) {
                    ctx.fillStyle = "black";
                    ctx.font = "20px arial";
                    ctx.textAlign = "left";
                    ctx.fillStyle = "white";
                    ctx.fillText("NAME: " + this.items[i].name,30+64,50);
                    ctx.fillText("TYPES: " + this.items[i].type.types,30+64,75);
                    ctx.fillStyle = "#666666";
                    ctx.fillRect(25,25,64,64);
                    ctx.drawImage(this.items[i].image,25+12,25+12,40,40);
                    }
                    if (mouseClicked) {
                        if (this.items.length >= i +1) {
                        this.equipedItem = this.items[i];
                        } else {
                            this.equipedItem = "none";
                        }
                    }
                    ctx.fillStyle = "#666666";
                }
                ctx.fillRect(x,y,64,64);
                ctx.fillStyle = "#555555";
                if (this.items.length >= i+1) {
                    ctx.drawImage(this.items[i].image,x+12,y+12,40,40);
                    ctx.font = "20px arial";
                    ctx.textAlign = "right";
                    ctx.fillStyle = "white";
                    if (this.items[i].amount != Infinity) {
                    ctx.fillText(this.items[i].amount, x+64,y+60)
                    } else {
                        ctx.font = "20px arial";
                        ctx.fillText("∞", x+64,y+64);
                    }
                    ctx.fillStyle = "#555555";
                }
            }
        }
        ctx.strokeStyle = "black";
        ctx.lineWidth = 1;
        ctx.fillStyle = "black";
        ctx.font = "10px arial";
        ctx.textAlign = "left";
        index = 0;
        }
    }
}