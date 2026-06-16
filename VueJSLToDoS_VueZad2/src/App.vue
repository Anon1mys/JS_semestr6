<template>
  <div id="app">
    <h1 class="page-title">Vue.js - Laboratorium</h1>

    <ShoppingList />
    <EventsDemo />
    <SiteLayout />
  </div>
</template>

<script>
import ShoppingList from './components/ShoppingList.vue'
import EventsDemo from './components/EventsDemo.vue'
import SiteLayout from './components/SiteLayout.vue'

export default {
  name: 'App',
  components: {
    ShoppingList,
    EventsDemo,
    SiteLayout
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: Arial, Helvetica, sans-serif;
  background: #f4f4f4;
  color: #333;
}

#app {
  max-width: 900px;
  margin: 0 auto;
  padding: 20px;
}

.page-title {
  text-align: center;
  color: #42b983;
  margin-bottom: 30px;
}
</style>
