<template>
  <header class="site-header">
    <h1>🐾 Pet Adoption Center</h1>
    <nav>
      <router-link to="/">Home</router-link>
<router-link to="/adopt">Adopt</router-link>

    </nav>
  </header>
</template>

<script>
export default {
  name: 'HeaderView'
}
</script>

<style scoped>
.site-header {
  background-color: #3498db;
  color: white;
  padding: 15px 20px;
  border-radius: 8px;
  margin-bottom: 20px;
}

.site-header nav {
  margin-top: 10px;
}

.site-header a {
  color: white;
  margin-right: 15px;
  text-decoration: none;
  font-weight: bold;
}

.site-header a.router-link-exact-active {
  text-decoration: underline;
}
</style>
