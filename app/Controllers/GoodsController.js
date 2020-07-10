import _goodsService from "../Services/GoodsService.js"
import _store from '../store.js'

//Public

function _draw() {
  let template = ""
  let goods = _store.State.goods
  goods.forEach(good => template += good.Template)
  document.getElementById("goods").innerHTML = template
  document.getElementById("credit").innerHTML = _store.Money.toString()
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

  showCart() {
    _goodsService.showCart()
  }
}