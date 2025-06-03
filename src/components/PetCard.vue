<template>
  <div class="pet-card">
    <img :src="getImageUrl(pet.image)" :alt="pet.name" />
    <h3>{{ pet.name }}</h3>
    <p>{{ pet.type }}</p>
  </div>
</template>

<script>
export default {
  name: 'PetCard',
  props: ['pet'],
  methods: {
    getImageUrl(imageName) {
      if (!imageName) {
        return require('@/assets/pet-images/default.jpg')
      }
      try {
        // For webpack compatibility, require expects a static string. Use a context for dynamic imports.
        return require(`@/assets/pet-images/${imageName}`)
      } catch (e) {
        // Try fallback to static import if dynamic fails
        console.error('Failed to load image:', imageName, e);
        return require('@/assets/pet-images/default.jpg')
      }
    }
  },
  mounted() {
    // Log the image name and result for debugging
    console.log('Pet image:', this.pet.image, this.getImageUrl(this.pet.image))
  }
}
</script>

<style scoped>
.pet-card {
  width: 200px;
  border: 1px solid #ccc;
  padding: 10px;
  text-align: center;
  border-radius: 10px;
  background: white;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
}
.pet-card img {
  width: 100%;
  height: auto;
  border-radius: 8px;
}
</style>
