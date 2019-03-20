<template>
  <section class="section">
    <div class="columns">
      <div class="column is-8">
        <div class="columns is-mobile">
          <shop-view :items="shopItems" />
        </div>
      </div>
      <div class="column is-4">
        <cart />
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import ShopView from '@/components/ShopView'
import Cart from '@/components/Cart'

export default {
  name: 'HomePage',

  components: {
    ShopView,
    Cart
  },
  asyncData({ store }) {
    return axios.get('http://localhost:7777/items').then(res => {
      return {
        shopItems: res.data
      }
    })
  }
}
</script>
