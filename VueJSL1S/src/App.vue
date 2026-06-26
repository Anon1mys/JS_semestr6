<template>
  <div id="app">
    <h1 class="page-title">Lista uczniów</h1>

    <StudentForm @add-student="addStudent" />

    <div class="cards">
      <StudentCard
        v-for="(student, index) in students"
        :key="index"
        :name="student.name"
        :surname="student.surname"
        :group="student.group"
      />
    </div>
  </div>
</template>

<script>
import StudentForm from './components/StudentForm.vue'
import StudentCard from './components/StudentCard.vue'

export default {
  name: 'App',
  components: {
    StudentForm,
    StudentCard
  },
  data() {
    return {
      students: []
    }
  },
  methods: {
    addStudent(student) {
      this.students.push(student)
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
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
}
</style>
