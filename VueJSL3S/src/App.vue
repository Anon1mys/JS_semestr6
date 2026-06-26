<template>
  <div id="app">
    <h1 class="page-title">System kart informacyjnych</h1>

    <div class="cards">
      <UserCard
        :name="user.name"
        :email="user.email"
        :role="user.role"
      />

      <ProductCard
        :name="product.name"
        :price="product.price"
        :description="product.description"
      />
    </div>
  </div>
</template>

<script>
import UserCard from './components/UserCard.vue'
import ProductCard from './components/ProductCard.vue'

export default {
  name: 'App',
  components: {
    UserCard,
    ProductCard
  },
  data() {
    return {
      user: {
        name: 'Jan Kowalski',
        email: 'jan@example.com',
        role: 'student'
      },
      product: {
        name: 'Laptop',
        price: 3500,
        description: 'Komputer przenośny do nauki'
      }
    }
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

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}
</style>
