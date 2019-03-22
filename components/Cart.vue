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
      <span v-for="(item, index) in allItems" :key="index" class="media">
        <span class="media-left">
          <figure class="image is-64x64">
            <img :src="item.imageUrl" :alt="item.name" />
          </figure>
        </span>
        <span class="media-content">
          <h6 class="title is-6">{{ item.name }}</h6>
          <div class="level is-mobile">
            <div class="level-left">
              <div class="level-item">
                <a
                  class="button is-small is-danger"
                  @click="removeItemFromCart(item)"
                  >Remove item
                </a>
              </div>
            </div>
          </div>
        </span>
      </span>
      <span class="media">
        <span class="media-content">
          <div class="level">
            <div class="level-left">
              <div class="level-item">
                <p>Total price : {{ totalPrice }}</p>
              </div>
            </div>
            <div class="level-right">
              <div class="level-item">
                <a class="button is-medium is-info">
                  <b-icon pack="fas" size="is-small" icon="shopping-cart" />
                  <span>Clear cart</span>
                </a>
              </div>
            </div>
          </div>
        </span>
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      allItems: 'getItemsInCart',
      totalPrice: 'getTotalPriceInCart',
      isCartEmpty: 'isCartEmpty'
    })
  },
  methods: {
    ...mapActions({
      removeItemFromCart: 'removeItemFromCart'
    })
  }
}
</script>

<style></style>
