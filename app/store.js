import Good from "./Models/Good.js";
let money = 0
let totalCredit = 0
let totalPrice = 0
let _state = {
  // activeValue: new Good({ title: "Good" }),
  /** @type {Good[]} */
  goods: [new Good({ name: "chair", imgUrl: "https://www.pier1.com/dis/dw/image/v2/AAID_PRD/on/demandware.static/-/Sites-pier1_master/default/dwf6aeaaf4/images/2248859/2248859_1.jpg?sw=1600&sh=1600", price: 10.99, quantity: 5, description: "small but comfy" }), new Good({ name: "lamp", imgUrl: "https://www.ethanallen.com/on/demandware.static/-/Sites-main/default/dwafc0789b/images/large_gray/09-6109.jpg", price: 8.99, quantity: 7, description: "it provides light" }), new Good({ name: "blender", imgUrl: "http://i.huffpost.com/gen/3974188/thumbs/o-KITCHENAID-BLENDER-570.jpg?2", price: 15.99, quantity: 3, description: "quiet and efficient" }), new Good({ name: "pillow", imgUrl: "http://media4.s-nbcnews.com/i/newscms/2016_18/1073206/clean-pillows-tease-today-160503_c18b002254031949b0611da1a2b4afaa.jpg", price: 20.99, quantity: 8, description: "comfy" }), new Good({ name: "toothbrush", imgUrl: "https://cdn.shopify.com/s/files/1/0725/9041/products/oral_b_crossaction_extra_soft.jpg?v=1462965151", price: 0.99, quantity: 4, description: "no dentist visits anymore, eat anything you want" }), new Good({ name: "comforter", imgUrl: "https://i.ebayimg.com/images/i/142227754931-0-1/s-l1000.jpg", price: 30.99, quantity: 20, description: "light and cool" }), new Good({ name: "cutting board", imgUrl: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fecx.images-amazon.com%2Fimages%2FI%2F81oCpwINO7L._SL1500_.jpg&f=1&nofb=1", price: 7.99, quantity: 12, description: "provides a surface for cutting" }), new Good({ name: "skillet", imgUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2Fthumb%2Fd%2Fde%2FSkilletselftitled.jpg%2F220px-Skilletselftitled.jpg&f=1&nofb=1", price: 24.99, quantity: 10, description: "doubles as weapon" })],
  /** @type {Good[]} */
  cart: []
};

class Store {
  /**
   * Provides access to application state data
   */
  deleteGood(goodId) {
    let indexToRemove = _state.goods.findIndex(good => good.id == goodId)
    _state.goods.splice(indexToRemove, 1)
  }

  addToCart(item) {
    let findItemIndex = _state.goods.findIndex(a => a.id == item)
    let findCartIndex = _state.cart.findIndex(b => b.id == item)
    let product = _state.goods[findItemIndex]
    if (money >= product.price) {
      if (product.quantity > 0) {
        money -= product.price;
        product.howmany++;
        _state.cart.push(product);
        product.quantity--;
      } else {
        alert("Sorry. Out of stock")
      }
    } else {
      alert("You do not have enough money to purchase this item.")
    }
    totalPrice += product.price
  }


  addMoney() {
    money += 10
  }

  get State() {
    return _state;
  }
  get Money() {
    return money;
  }
  get Cart() {
    return cart;
  }

  get TotalPrice() {
    return totalPrice;
  }
}

const STORE = new Store();
export default STORE;
