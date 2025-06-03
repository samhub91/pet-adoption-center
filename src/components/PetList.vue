<template>
  <div class="pet-list">
    <PetCard v-for="pet in pets" :key="pet.id" :pet="pet" @click="selectPet(pet.id)" />
  </div>
</template>

<script>
import PetCard from './PetCard.vue'

export default {
  name: 'PetList',
  components: { PetCard },
  props: ['pets'],
  methods: {
    selectPet(petId) {
      this.$emit('selectPet', petId)
    }
  }
}
</script>

<style>
.pet-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>
