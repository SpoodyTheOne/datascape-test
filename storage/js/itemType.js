function itemType(image,types,name,max,stats) {
    img = new Image();
    img.src = image;
    this.image = img;
    this.types = types;
    this.name = name;
    this.max = max;
    this.stats = stats;
}