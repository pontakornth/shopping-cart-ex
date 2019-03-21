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
  </section>
</template>

<script>
// import axios from 'axios'
import ShopView from '@/components/ShopView'
import Cart from '@/components/Cart'

export default {
  name: 'HomePage',

  components: {
    ShopView,
    Cart
  },
  async asyncData({ store }) {
    await store.dispatch('fetchItems', 1)
  }
}
</script>
