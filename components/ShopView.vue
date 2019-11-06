<template>
  <div class="box">
    <div class="columns is-multiline">
      <item-card v-for="item in stock" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import ItemCard from '@/components/ItemCard'
export default {
  components: {
    ItemCard
  },
  data() {
    return {
      page: 1
    }
  },
  computed: {
    ...mapGetters({
      stock: 'getItemsInStock'
    })
  },
  methods: {
    ...mapActions({
      fetchItems: 'fetchItems'
    }),
    async changePage(value) {
      await this.fetchItems(value)
    }
  }
}
</script>
