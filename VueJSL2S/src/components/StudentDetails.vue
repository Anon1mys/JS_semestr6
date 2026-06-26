<template>
  <section class="student-details">
    <h2>Szczegóły ucznia</h2>

    <div v-if="student">
      <p><strong>Imię:</strong> {{ student.name }}</p>
      <p><strong>Nazwisko:</strong> {{ student.surname }}</p>
      <p><strong>Grupa:</strong> {{ student.group }}</p>
      <p><strong>Status:</strong> {{ student.active ? 'aktywny' : 'nieaktywny' }}</p>
    </div>

    <p v-else class="empty">Wybierz ucznia z listy</p>
  </section>
</template>

<script>
export default {
  name: 'StudentDetails',
  props: {
    student: {
      type: Object,
      default: null
    }
  }
}
</script>

<style scoped>
.student-details {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
}

.student-details h2 {
  margin-top: 0;
}

.empty {
  color: #999;
}
</style>
