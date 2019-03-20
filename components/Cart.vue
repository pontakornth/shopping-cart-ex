<template>
  <div class="box">
    <div v-if="isCartEmpty">
      <div class="has-text-centered">
        <p>
          No item in cart
        </p>
      </div>
    </div>
    <div v-else>
      <span v-for="item in allItems" :key="item.id" class="media">
        <span class="media-left">
          <figure class="image is-64x64">
            <img :src="item.imageUrl" :alt="item.name" />
          </figure>
        </span>
        <span class="media-content">
          <h6 class="title is-6">{{ item.name }}</h6>
        </span>
      </span>
      <span class="media">
        <span class="media-content">
          <p>Total price : {{ totalPrice }}</p>
        </span>
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      allItems: 'getItemsInCart',
      totalPrice: 'getTotalPriceInCart',
      isCartEmpty: 'isCartEmpty'
    })
  }
}
</script>

<style></style>
