import _store from "../store.js"
import Good from "../Models/Good.js"

//Public
class GoodsService {
  constructor() {
    console.log("Hello from Service")
  }
}

showCart() {
  _store.showCart()
}

addToCart() {
  _store.addToCart(item)
}
deleteGood(goodId) {
  _store.deleteGood(goodId)
}

const SERVICE = new GoodsService();
export default SERVICE;
