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
            `<div class="col-4 border rounded shadow">
            <h1>${this.name}</h1>
            <h1>id#${this.id}</h1>
            <img class="img-fluid" src="${this.imgUrl}"/>
            <h1>${this.price}</h1>
            <h1>${this.quantity}</h1>
            <h1>${this.description}</h1>
            <div class="row justify-content-between">
            <span><button class="btn rounded btn-primary border border-dark" onclick="app.goodsController.addToCart('${this.id}')">BUY</button></span>
            <span><button class="btn rounded btn-danger border border-dark" onclick="app.goodsController.deleteGood('${this.id}')">DELETE</button></span>
            </div>
            </div>
            `
        return template
    }
}