function itemType(image,types,name,max) {
    img = new Image();
    img.src = image;
    this.image = img;
    this.types = types;
    this.name = name;
    this.max = max;
}