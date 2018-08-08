function Item(type,amount) {
    if (type instanceof itemType) {
        this.type = type;
    } else {
        console.error("Item type must be of class 'itemType'")
    }
    this.image = this.type.image;
    this.name = this.type.name;
    if (amount != Infinity) {
        if (amount > this.type.max) {
            this.amount = this.type.max;
        } else {
    this.amount = parseInt(amount);
        }
    } else {
        this.amount = amount;
    }
}