function Item(type,amount) {
    if (type instanceof itemType) {
        this.type = type;
    } else {
        console.error("Item type must be of class 'itemType'")
    }
    this.image = this.type.image;
    this.name = this.type.name;
    if (amount != Infinity) {
    this.amount = parseInt(amount);
    } else {
        this.amount = amount;
    }
}