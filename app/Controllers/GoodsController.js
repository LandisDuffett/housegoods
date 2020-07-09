import _goodsService from "../Services/GoodsService.js"
import _store from '../store.js'

//Public

function _draw() {
  let template = ""
  let template2 = ""
  let cart = store.State.cart
  let goods = store.State.goods
  goods.forEach(good => template += goods.Template)
  document.getElementById("goods").innerHTML = template
  cart.forEach(item => template2 += cart.Template)
}
export default class GoodsController {
  constructor() {
    console.log("Hello from controller")
    _draw()
  }

  deleteGood(goodId) {
    _goodsService.deleteGood(goodId)
    _draw()
  }
  addToCart() {
    _goodsService.addToCart(item)
  }
}
showCart() {
  _goodsService.showCart()
}
}