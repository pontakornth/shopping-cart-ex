import itemsData from '@/assets/fake_items.json'
export const state = () => ({
  stock: [],
  cart: []
})

export const getters = {
  getItemsInCart(state) {
    return state.cart
  },
  getItemsInStock(state) {
    return state.stock
  },
  getTotalPriceInCart(state) {
    return state.cart.reduce((x, y) => x + Number(y.price), 0)
  },
  isCartEmpty(state) {
    return state.cart.length === 0
  }
}

export const mutations = {
  setStock(state, { items }) {
    state.stock = items
  },
  addItemToCart(state, { item }) {
    state.cart.push(item)
  },
  removeItemFromCart(state, { item }) {
    state.cart.splice(state.cart.indexOf(item), 1)
  },
  clearCart(state) {
    state.cart = []
  }
}

export const actions = {
  setStock({ commit }, items) {
    commit('setStock', { items })
  },
  addItemToCart({ commit }, item) {
    commit('addItemToCart', { item })
  },
  removeItemFromCart({ commit }, item) {
    commit('removeItemFromCart', { item })
  },
  clearCart({ commit }) {
    commit('clearCart')
  },
  fetchItems({ commit }, page) {
    commit('setStock', { items: itemsData.items })
  }
}
