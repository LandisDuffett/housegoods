import Good from "./Models/Good.js";
let money = 0
let totalPrice = 0
let _state = {
  // activeValue: new Good({ title: "Good" }),
  /** @type {Good[]} */
  goods: [new Good({ name: "chair", imgUrl: "https://www.pier1.com/dis/dw/image/v2/AAID_PRD/on/demandware.static/-/Sites-pier1_master/default/dwf6aeaaf4/images/2248859/2248859_1.jpg?sw=1600&sh=1600", price: 11, quantity: 5, description: "meets any analytic philosopher's definiiton of 'chair'" }), new Good({ name: "lamp", imgUrl: "https://www.ethanallen.com/on/demandware.static/-/Sites-main/default/dwafc0789b/images/large_gray/09-6109.jpg", price: 9, quantity: 7, description: "it provides light in cooperation wiht a light bulb" }), new Good({ name: "blender", imgUrl: "http://i.huffpost.com/gen/3974188/thumbs/o-KITCHENAID-BLENDER-570.jpg?2", price: 16, quantity: 3, description: "responds to controls" }), new Good({ name: "pillow", imgUrl: "http://media4.s-nbcnews.com/i/newscms/2016_18/1073206/clean-pillows-tease-today-160503_c18b002254031949b0611da1a2b4afaa.jpg", price: 21, quantity: 8, description: "fits most heads" }), new Good({ name: "toothbrush", imgUrl: "https://cdn.shopify.com/s/files/1/0725/9041/products/oral_b_crossaction_extra_soft.jpg?v=1462965151", price: 1, quantity: 4, description: "cleans teeth" }), new Good({ name: "comforter", imgUrl: "https://i.ebayimg.com/images/i/142227754931-0-1/s-l1000.jpg", price: 31, quantity: 20, description: "warm in the winter, warm in the summer" }), new Good({ name: "cutting board", imgUrl: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fecx.images-amazon.com%2Fimages%2FI%2F81oCpwINO7L._SL1500_.jpg&f=1&nofb=1", price: 8, quantity: 12, description: "surface is flat and hard" }), new Good({ name: "skillet", imgUrl: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2Fthumb%2Fd%2Fde%2FSkilletselftitled.jpg%2F220px-Skilletselftitled.jpg&f=1&nofb=1", price: 25, quantity: 10, description: "for cooking or home defense" })],
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
        if (findCartIndex == -1) {
          _state.cart.push(product);
        }
        totalPrice += product.price
        product.quantity--;
      } else {
        alert("Sorry. Out of stock")
      }
    } else {
      alert("You do not have enough money to purchase this item.")
    }

    console.log(product.price)
    console.log(totalPrice)
  }


  addMoney() {
    money += 10
  }
  decreaseQuantity(item) {
    let productIndex = _state.goods.findIndex(good => good.id == item)
    let indexToDecrease = _state.cart.findIndex(wampum => wampum.id == item)
    if (_state.cart[indexToDecrease].howmany > 0) {
      _state.cart[indexToDecrease].howmany--
      _state.goods[productIndex].quantity++
      money += _state.cart[indexToDecrease].price
      totalPrice -= _state.cart[indexToDecrease].price
    }
    this.checkQuantity(item)
  }

  checkQuantity(item) {
    let indexToRemove = _state.cart.findIndex(wampum => wampum.id == item)
    if (_state.cart[indexToRemove].howmany == 0) {
      _state.cart.splice(indexToRemove, 1)
    }
  }
  increaseQuantity(item) {
    let productIndex = _state.goods.findIndex(good => good.id == item)
    let indexToDecrease = _state.cart.findIndex(wampum => wampum.id == item)
    if (_state.goods[productIndex].quantity >= 1) { this.addToCart(item) } else { alert("Quantity exceeds current stock.") }
  }
  deleteFromCart(item) {
    let productIndex = _state.goods.findIndex(good => good.id == item)
    let indexToRemove = _state.cart.findIndex(wampum => wampum.id == item)
    console.log(_state.cart[indexToRemove].price)
    money += _state.cart[indexToRemove].price * _state.cart[indexToRemove].howmany
    totalPrice -= _state.cart[indexToRemove].price * _state.cart[indexToRemove].howmany
    _state.goods[productIndex].quantity += _state.cart[indexToRemove].howmany
    _state.cart[indexToRemove].howmany = 0
    _state.cart.splice(indexToRemove, 1)

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
