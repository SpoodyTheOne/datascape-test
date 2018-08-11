function blockType(image,name,item,time,stats) {
    if (!item instanceof itemType) {
        return "Argument 3 is invalid";
    }
    img = new Image();
    img.src = image;
    this.image = img;
    this.name = name;
    this.item = item;
    this.time = time;
    this.special = false;
    if (stats != null && stats.constructor.name.toLowerCase() === "object") {
        this.stats = stats;
    } else {
        this.stats = {};
    }
}