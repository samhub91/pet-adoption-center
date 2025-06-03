<template>
  <div id="app">
    <HeaderView />
    <router-view />
  </div>
</template>

<script>
import HeaderView from './components/Header.vue'
export default {
  name: 'App',
  components: {
    HeaderView
  }
}
</script>

<style>
body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f4f4f4;
  color: #333;
}

#app {
  max-width: 960px;
  margin: 0 auto;
  padding: 20px;
}
</style>
