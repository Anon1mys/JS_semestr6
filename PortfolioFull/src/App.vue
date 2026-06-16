<template>
  <AppHeader></AppHeader>
  <router-view></router-view>
</template>

<script>
import AppHeader from './components/AppHeader.vue'

export default {
  name: 'App',
  components: {
    AppHeader
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Merriweather&display=swap');

body {
  background: #e8f5e9;
  font-family: "Merriweather", serif;
  margin: 0;
}
</style>
