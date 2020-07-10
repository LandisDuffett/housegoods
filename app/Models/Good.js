let id = 100
export default class Good {
    constructor(data) {
        this.id = id++;
        this.name = data.name;
        this.imgUrl = data.imgUrl;
        this.price = data.price;
        this.quantity = data.quantity;
        this.description = data.description;
        this.howmany = 0;
    }

    get Template() {
        let template =
            ` <div class="panel panel-default rounded bg-light m-4 col-3">
            <div class="panel-body p-3 text-center">
            <h5><b>${this.name}</b></h5>
            <h5>id#${this.id}</h5>
            <img class="img-fluid m-2" src="${this.imgUrl}"/>
            <h5>Price: $${this.price}</h5>
            <h5>Quantity in Stock: ${this.quantity}</h5>
            <h5>"${this.description}"</h5>
            <div class="row justify-content-between align-content-end">
            <span><button class="btn rounded btn-primary border border-dark" onclick="app.goodsController.addToCart('${this.id}')">BUY</button></span>
            <span><button class="btn rounded btn-danger border border-dark" onclick="app.goodsController.deleteGood('${this.id}')">DELETE</button></span>
            </div>
            </div>
            </div>
            `
        return template
    }

    get Template2() {
        let template2 =
            `<div class="col-12 border rounded shadow">
            <h3>Item: ${this.name}</h3>
            <img class="img-fluid high" src="${this.imgUrl}"/>
            <h5>Item Price: $${this.price}</h5>
            <h5>Quantity: ${this.howmany}</h5>
             <span><button class="btn rounded btn-primary border border-dark" onclick="app.goodsController.decreaseQuantity('${this.id}')">Decrease Quantity</button></span>
             <span><button class="btn rounded btn-primary border border-dark" onclick="app.goodsController.increaseQuantity('${this.id}')">Increase Quantity</button></span>
             <span><button class="btn rounded btn-danger border border-dark" onclick="app.goodsController.deleteFromCart('${this.id}')">Delete</button></span>
            </div>
            `
        return template2
    }
}