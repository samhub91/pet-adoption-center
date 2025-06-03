<template>
  <div v-if="pet">
    <img :src="petImage" :alt="pet.name" class="pet-detail-image" />
    <h3>Details for {{ pet.name }}</h3>
    <p>Type: {{ pet.type }}</p>
    <p>Description: {{ pet.description || 'No description available.' }}</p>
  </div>
</template>

<script>
export default {
  name: 'PetDetails',
  props: ['petId'],
  data() {
    return {
      pet: null
    }
  },
  computed: {
    petImage() {
      if (!this.pet) return ''
      try {
        return require(`@/assets/pet-images/${this.pet.image}`)
      } catch {
        return require('@/assets/pet-images/default.jpg')
      }
    }
  },
  created() {
    const pets = [
      { id: 1, name: 'Buddy', type: 'Dog', image: 'dog1.jpg', description: 'Friendly dog.' },
      { id: 2, name: 'Whiskers', type: 'Cat', image: 'cat.jpeg', description: 'Playful cat.' },
      { id: 3, name: 'Goldie', type: 'Fish', image: 'fish.jpeg', description: 'Beautiful goldfish.' }
    ]
    this.pet = pets.find(p => p.id === Number(this.petId))
  }
}
</script>

<style scoped>
.pet-detail-image {
  width: 300px;
  height: auto;
  border-radius: 10px;
  margin-bottom: 15px;
}
</style>
