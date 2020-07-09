let id = 100
export default class Good {
    constructor(data) {
        this.id = id++;
        this.name = data.name;
        this.imgUrl = data.imgUrl;
        this.price = data.price;
        this.quantity = data.quantity;
        this.description = data.description;
    }

    get Template() {
        let template =
            `<div class="col-4 border rounded shadow>
            <h1>id#${this.name}</h1>
            <h1>id#${this.id}</h1>
            <img class="img-fluid" src="${this.imgUrl}"/>
            <h1>${this.price}</h1>
            <h1>${this.quantity}</h1>
            <h1>${this.description}</h1>
            <button class="btn rounded btn-primary border border-dark" onclick="app.vendorController.addToCart('${this.id}')">BUY</button>
            `
        return template
    }
}