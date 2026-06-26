<template>
  <InfoCard>
    <template #header>
      Produkt
    </template>

    <p><strong>Nazwa:</strong> {{ name }}</p>
    <p><strong>Cena:</strong> {{ price }} zł</p>
    <p><strong>Opis:</strong> {{ description }}</p>

    <template #footer>
      Composition API
    </template>
  </InfoCard>
</template>

<script setup>
import InfoCard from './InfoCard.vue'

defineProps({
  name: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script>

<style scoped>
p {
  margin: 0 0 8px;
}
</style>
