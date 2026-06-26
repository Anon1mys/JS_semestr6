<template>
  <form class="student-form" @submit.prevent="submit">
    <h2>Dodaj ucznia</h2>

    <label>
      Imię
      <input v-model="name" type="text" required />
    </label>

    <label>
      Nazwisko
      <input v-model="surname" type="text" required />
    </label>

    <label>
      Grupa
      <input v-model="group" type="text" required />
    </label>

    <button type="submit">Dodaj do listy</button>
  </form>
</template>

<script>
export default {
  name: 'StudentForm',
  emits: ['add-student'],
  data() {
    return {
      name: '',
      surname: '',
      group: ''
    }
  },
  methods: {
    submit() {
      this.$emit('add-student', {
        name: this.name,
        surname: this.surname,
        group: this.group
      })
      this.name = ''
      this.surname = ''
      this.group = ''
    }
  }
}
</script>

<style scoped>
.student-form {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 30px;
}

.student-form h2 {
  margin-top: 0;
}

.student-form label {
  display: block;
  margin-bottom: 12px;
  font-weight: bold;
}

.student-form input {
  display: block;
  width: 100%;
  margin-top: 4px;
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.student-form button {
  margin-top: 8px;
  padding: 8px 16px;
  background: #42b983;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
