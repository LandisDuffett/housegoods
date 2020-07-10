import _goodsService from "../Services/GoodsService.js"
import _store from '../store.js'

//Public

function _draw() {
  let template = ""
  let template2 = ""
  let goods = _store.State.goods
  let buys = _store.State.cart
  goods.forEach(good => template += good.Template)
  buys.forEach(product => template2 += product.Template2)
  document.getElementById("goods").innerHTML = template
  document.getElementById("credit").innerHTML = _store.Money.toString()
  document.getElementById("incart").innerHTML = template2
  document.getElementById("totaled").innerHTML = _store.TotalPrice.toString()
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
  addToCart(item) {
    _goodsService.addToCart(item)
    console.log("pass1")
    _draw()
  }

  addMoney() {
    _goodsService.addMoney()
    _draw()
  }

  decreaseQuantity(item) {
    _goodsService.decreaseQuantity(item)
    _draw()
  }
  increaseQuantity(item) {
    _goodsService.increaseQuantity(item)
    _draw()
  }
  deleteFromCart(item) {
    _goodsService.deleteFromCart(item)
    _draw()
  }
}