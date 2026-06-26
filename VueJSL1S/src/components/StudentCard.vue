<template>
  <div class="student-card">
    <h3>{{ name }} {{ surname }}</h3>
    <p>Grupa: {{ group }}</p>
  </div>
</template>

<script>
export default {
  name: 'StudentCard',
  props: {
    name: {
      type: String,
      required: true
    },
    surname: {
      type: String,
      required: true
    },
    group: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.student-card {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
}

.student-card h3 {
  margin: 0 0 8px;
  color: #2c3e50;
}

.student-card p {
  margin: 0;
  color: #666;
}
</style>
