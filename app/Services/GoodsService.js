import _store from "../store.js"
import Good from "../Models/Good.js"

//Public
class GoodsService {
  constructor() {
    console.log("Hello from Service")
  }


  addToCart(item) {
    _store.addToCart(item)
  }

  addMoney() {
    _store.addMoney()
  }
  deleteGood(goodId) {
    _store.deleteGood(goodId)
  }
  decreaseQuantity(item) {
    _store.decreaseQuantity(item)
  }
  increaseQuantity(item) {
    _store.increaseQuantity(item)
  }
  deleteFromCart(item) {
    _store.deleteFromCart(item)
  }
}
const SERVICE = new GoodsService();
export default SERVICE;
