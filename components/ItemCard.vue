<template>
  <div class="column">
    <div class="card">
      <header class="card-header">
        <p class="card-header-title has-text-grey">
          {{ item.name }}
        </p>
      </header>
      <div class="card-content">
        <div class="content has-text-centered">
          <figure class="image">
            <img :src="item.imageUrl" :alt="item.name" />
          </figure>
          <div class="content">
            <p>
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
      <footer class="card-footer">
        <div class="card-footer-item">
          <span> Price : {{ item.price }} </span>
        </div>
        <div class="card-footer-item">
          <span>
            <button class="button is-primary">
              <b-icon pack="fas" icon="cart-plus" />
              <span>
                Add to cart
              </span>
            </button>
          </span>
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>
