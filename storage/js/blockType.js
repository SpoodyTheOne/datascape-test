function blockType(image,name,item) {
    if (!item instanceof itemType) {
        return "Argument 3 is invalid";
    }
    img = new Image();
    img.src = image;
    this.image = img;
    this.name = name;
    this.item = item;
}