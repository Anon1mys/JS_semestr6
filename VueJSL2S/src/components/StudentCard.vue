<template>
  <div class="student-card" :class="{ selected: active }" @click="select">
    <h3>{{ student.name }} {{ student.surname }}</h3>
    <p>Grupa: {{ student.group }}</p>
    <p>Status: {{ student.active ? 'aktywny' : 'nieaktywny' }}</p>
  </div>
</template>

<script>
export default {
  name: 'StudentCard',
  props: {
    student: {
      type: Object,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    }
  },
  emits: ['select'],
  methods: {
    select() {
      this.$emit('select', this.student)
    }
  }
}
</script>

<style scoped>
.student-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 10px;
  cursor: pointer;
}

.student-card:hover {
  border-color: #42b983;
}

.student-card.selected {
  border-color: #42b983;
  background: #f0faf5;
}

.student-card h3 {
  margin: 0 0 8px;
}

.student-card p {
  margin: 0 0 4px;
  color: #666;
}
</style>
