<template>
  <header class="header">
    <h1>Portfolio - Maksym Leskiv</h1>
    <nav class="nav">
      <router-link to="/" class="nav-link">Home</router-link>
      <router-link to="/contact" class="nav-link">Contact</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
.header {
  background: #4c78af69;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 30px;
}

h1 {
  color: #1b5e20;
  margin: 0;
  font-size: 24px;
}

.nav {
  display: flex;
  gap: 16px;
}

.nav-link {
  color: #1b5e20;
  text-decoration: none;
  font-weight: bold;
  padding: 6px 12px;
  border-radius: 4px;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.4);
}

.nav-link.router-link-active {
  background: #a5d6a7;
}
</style>
