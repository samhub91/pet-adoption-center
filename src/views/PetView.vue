<!-- PetView.vue -->
<template>
  <div class="pet-card">
    <h2>{{ pet.name }}</h2>
    <img :src="pet.image" alt="Pet" class="pet-img" />
    <p><strong>Breed:</strong> {{ pet.breed }}</p>
    <p><strong>Age:</strong> {{ pet.age }}</p>
    <router-link :to="`/adopt/${pet.id}`" class="adopt-link">Adopt</router-link>
  </div>
</template>

<script>
export default {
  name: 'PetView',
  props: ['pet']
}
</script>

<style scoped>
.pet-card {
  background: white;
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.pet-img {
  width: 100%;
  max-height: 250px;
  object-fit: cover;
  border-radius: 6px;
  margin: 10px 0;
}

.adopt-link {
  display: inline-block;
  margin-top: 10px;
  color: white;
  background: #27ae60;
  padding: 8px 14px;
  border-radius: 6px;
  text-decoration: none;
}
</style>
