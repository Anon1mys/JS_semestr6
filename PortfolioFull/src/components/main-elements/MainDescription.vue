<template>
  <div class="container">
    <h3>O mnie</h3>
    <div class="desc">
      Jestem studentem informatyki i uczę się tworzenia aplikacji webowych
      w JavaScript. Interesuję się Vue.js, Node.js oraz projektowaniem stron WWW.
      Poniżej prezentuję wybrane projekty z laboratoriów.
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainDescription'
}
</script>

<style scoped>
h3 {
  margin-top: 0;
  text-align: center;
  color: #1b5e20;
}

.container {
  margin: 10px;
  padding: 15px;
  border: 1px solid #a5d6a7;
  border-radius: 5px;
  background: #a5d6a7;
}

.desc {
  text-align: justify;
  text-justify: inter-word;
  line-height: 1.6;
  color: #333;
}
</style>
