<template>
  <div id="app">
    <h1 class="page-title">Panel zarządzania klasą</h1>

    <div class="layout">
      <StudentList
        :students="students"
        :selected-id="selectedStudent ? selectedStudent.id : null"
        @select-student="selectStudent"
      />

      <StudentDetails :student="selectedStudent" />
    </div>
  </div>
</template>

<script>
import StudentList from './components/StudentList.vue'
import StudentDetails from './components/StudentDetails.vue'

export default {
  name: 'App',
  components: {
    StudentList,
    StudentDetails
  },
  data() {
    return {
      students: [
        { id: 1, name: 'Anna', surname: 'Kowalska', group: 'A', active: true },
        { id: 2, name: 'Piotr', surname: 'Nowak', group: 'B', active: false },
        { id: 3, name: 'Maria', surname: 'Wiśniewska', group: 'A', active: true }
      ],
      selectedStudent: null
    }
  },
  watch: {
    selectedStudent: {
      handler(value) {
        if (value) {
          localStorage.setItem('selectedStudent', JSON.stringify(value))
        } else {
          localStorage.removeItem('selectedStudent')
        }
      },
      deep: true
    }
  },
  mounted() {
    const saved = localStorage.getItem('selectedStudent')
    if (saved) {
      this.selectedStudent = JSON.parse(saved)
    }
  },
  methods: {
    selectStudent(student) {
      this.selectedStudent = student
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

.layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

@media (max-width: 700px) {
  .layout {
    grid-template-columns: 1fr;
  }
}
</style>
