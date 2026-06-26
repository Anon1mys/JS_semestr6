<template>
  <InfoCard>
    <template #header>
      Użytkownik
    </template>

    <p><strong>Imię:</strong> {{ name }}</p>
    <p><strong>E-mail:</strong> {{ email }}</p>
    <p><strong>Rola:</strong> {{ role }}</p>

    <template #footer>
      Options API
    </template>
  </InfoCard>
</template>

<script>
import InfoCard from './InfoCard.vue'

export default {
  name: 'UserCard',
  components: {
    InfoCard
  },
  props: {
    name: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true
    },
    role: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
p {
  margin: 0 0 8px;
}
</style>
