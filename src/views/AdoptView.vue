<template>
  <div>
    <h2>Adopt a Pet</h2>

    <!-- If no pet selected, show pet list to pick from -->
    <div v-if="!selectedPetId">
      <FilterBar @filter="handleFilter" />
      <PetList :pets="filteredPets" @selectPet="handleSelectPet" />
    </div>

    <!-- If pet selected, show details and adoption form -->
    <div v-else>
      <PetDetails :petId="selectedPetId" />
      <AdoptForm :petId="selectedPetId" />
      <button @click="selectedPetId = null" class="back-btn">← Choose another pet</button>
    </div>
  </div>
</template>

<script>
import FilterBar from '../components/FilterBar.vue'
import PetList from '../components/PetList.vue'
import PetDetails from '../components/PetDetails.vue'
import AdoptForm from '../components/AdoptForm.vue'

export default {
  name: 'AdoptView',
  components: { FilterBar, PetList, PetDetails, AdoptForm },
  data() {
    return {
      pets: [],           // full list of pets, fetch or import this data
      filteredPets: [],
      selectedPetId: null,
      filterCriteria: null
    }
  },
  created() {
    // Add image property to each pet
    this.pets = [
      { id: 1, name: 'Buddy', type: 'Dog', image: 'dog1.jpg' },
      { id: 2, name: 'Whiskers', type: 'Cat', image: 'cat.jpeg' },
      { id: 3, name: 'Goldie', type: 'Fish', image: 'fish.jpeg' }
      // add more pets here or fetch dynamically
    ]
    this.filteredPets = this.pets
  },
  methods: {
    handleFilter(criteria) {
      // Implement your filtering logic here
      this.filterCriteria = criteria
      if (!criteria) {
        this.filteredPets = this.pets
      } else {
        this.filteredPets = this.pets.filter(pet => pet.type === criteria)
      }
    },
    handleSelectPet(petId) {
      this.selectedPetId = petId
    }
  }
}
</script>

<style scoped>
.back-btn {
  margin-top: 1rem;
  background-color: #eee;
  border: none;
  padding: 8px 12px;
  cursor: pointer;
  border-radius: 4px;
}
.back-btn:hover {
  background-color: #ccc;
}
</style>
