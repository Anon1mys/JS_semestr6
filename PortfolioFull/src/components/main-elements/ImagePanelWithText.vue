<template>
  <div class="panel">
    <div class="image-box">
      <img :src="image" :alt="name" />
    </div>
    <div class="text-box">
      <h3>{{ name }}</h3>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ImagePanelWithText',
  props: ['name', 'description', 'image']
}
</script>

<style scoped>
.panel {
  display: flex;
  gap: 20px;
  background: #fff;
  border: 2px solid #a5d6a7;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.image-box {
  flex: 0 0 200px;
}

.image-box img {
  width: 100%;
  border-radius: 6px;
  display: block;
}

.text-box h3 {
  margin: 0 0 10px;
  color: #2e7d32;
}

.text-box p {
  margin: 0;
  line-height: 1.6;
  text-align: justify;
  color: #444;
}

@media (max-width: 600px) {
  .panel {
    flex-direction: column;
  }

  .image-box {
    flex: none;
  }
}
</style>
