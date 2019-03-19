<template>
  <section class="section">
    <div class="columns is-mobile">
      <shop-view :items="shopItems" />
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import ShopView from '@/components/ShopView'

export default {
  name: 'HomePage',

  components: {
    ShopView
  },
  asyncData() {
    return axios.get('http://localhost:7777/items').then(res => {
      return {
        shopItems: res.data
      }
    })
  }
}
</script>
