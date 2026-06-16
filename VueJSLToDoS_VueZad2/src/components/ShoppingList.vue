<template>
  <section class="shopping-list">
    <h2>Lista zakupów</h2>

    <div class="add-row">
      <input
        v-model="newProduct"
        type="text"
        placeholder="Wpisz produkt"
        @keyup.enter="addProduct"
      />
      <button type="button" @click="addProduct">Dodaj</button>
    </div>

    <ul class="products">
      <li v-for="(product, index) in products" :key="index">
        <label>
          <input type="checkbox" v-model="product.done" />
          <span :class="{ done: product.done }">{{ product.name }}</span>
        </label>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: 'ShoppingList',
  data() {
    return {
      newProduct: '',
      products: [
        { name: 'Mleko', done: false },
        { name: 'Chleb', done: true },
        { name: 'Jabłka', done: false }
      ]
    }
  },
  methods: {
    addProduct() {
      const name = this.newProduct.trim()
      if (name === '') {
        return
      }
      this.products.push({ name: name, done: false })
      this.newProduct = ''
    }
  }
}
</script>

<style scoped>
.shopping-list {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 30px;
}

.shopping-list h2 {
  margin-top: 0;
  color: #2c3e50;
}

.add-row {
  display: flex;
  gap: 10px;
  margin-bottom: 16px;
}

.add-row input {
  flex: 1;
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.add-row button {
  padding: 8px 16px;
  background: #42b983;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.products {
  list-style: none;
  padding: 0;
  margin: 0;
}

.products li {
  padding: 8px 0;
  border-bottom: 1px solid #eee;
}

.products label {
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
}

.products span.done {
  text-decoration: line-through;
  color: #999;
}
</style>
