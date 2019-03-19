<template>
  <div class="box">
    <div class="columns is-multiline">
      <item-card v-for="item in items" :key="item.id" :item="item" />
    </div>
  </div>
</template>

<script>
import ItemCard from '@/components/ItemCard'
export default {
  components: {
    ItemCard
  },
  props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>
