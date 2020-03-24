<template>
  <section class="section">
    <div class="columns">
      <div class="column is-8">
        <div class="columns is-mobile">
          <shop-view />
        </div>
      </div>
      <div class="column is-4">
        <cart />
      </div>
    </div>
    <button @click="isCartActive = true" class="button is-primary">
      Open cart
    </button>
    <b-modal :active.sync="isCartActive">
      <cart />
    </b-modal>
    <button class="button is-primary is-rounded">
      <b-icon pack="fas" size="is-small" icon="shopping-cart" />
    </button>
  </section>
</template>

<script>
// import axios from 'axios'
// import fab from 'vue-fab'

import ShopView from '@/components/ShopView'
import Cart from '@/components/Cart'

export default {
  name: 'HomePage',

  components: {
    ShopView,
    Cart
    // fab
  },
  data() {
    return {
      isCartActive: false,
      fabActions: [
        {
          name: 'openCart',
          icon: 'shopping_cart'
        }
      ]
    }
  },
  methods: {
    openCart() {
      this.isCartActive = true
    }
  },
  async asyncData({ store }) {
    await store.dispatch('fetchItems', 1)
  }
}
</script>
