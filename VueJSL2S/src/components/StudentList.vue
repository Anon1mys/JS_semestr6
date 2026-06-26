<template>
  <section class="student-list">
    <h2>Lista uczniów</h2>

    <StudentCard
      v-for="student in students"
      :key="student.id"
      :student="student"
      :active="student.id === selectedId"
      @select="selectStudent"
    />
  </section>
</template>

<script>
import StudentCard from './StudentCard.vue'

export default {
  name: 'StudentList',
  components: {
    StudentCard
  },
  props: {
    students: {
      type: Array,
      required: true
    },
    selectedId: {
      type: Number,
      default: null
    }
  },
  emits: ['select-student'],
  methods: {
    selectStudent(student) {
      this.$emit('select-student', student)
    }
  }
}
</script>

<style scoped>
.student-list {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
}

.student-list h2 {
  margin-top: 0;
}
</style>
