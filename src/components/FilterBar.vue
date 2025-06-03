<template>
  <div class="filter-bar">
    <label for="pet-type-select">Filter by type:</label>
    <select id="pet-type-select" @change="filterChanged" v-model="selectedType">
      <option value="">All</option>
      <option>Dog</option>
      <option>Cat</option>
      <option>Fish</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'FilterBar',
  data() {
    return {
      selectedType: ''
    }
  },
  methods: {
    filterChanged() {
      this.$emit('filter', this.selectedType)
    }
  }
}
</script>

<style scoped>
.filter-bar {
  margin-bottom: 20px;
}
</style>
