<template>
  <div class="project-card" :class="{ active: active }" @click="$emit('click')">
    <h4>{{ name }}</h4>
    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: 'ProjectsProject',
  props: ['name', 'description', 'active'],
  emits: ['click']
}
</script>

<style scoped>
.project-card {
  background: #fff;
  border: 2px solid #c8e6c9;
  border-radius: 8px;
  padding: 12px 16px;
  cursor: pointer;
  transition: border-color 0.2s, background 0.2s;
}

.project-card:hover {
  border-color: #81c784;
  background: #f1f8e9;
}

.project-card.active {
  border-color: #2e7d32;
  background: #c8e6c9;
  box-shadow: 0 2px 6px rgba(46, 125, 50, 0.2);
}

h4 {
  margin: 0 0 6px;
  color: #1565c0;
  text-decoration: underline;
  cursor: pointer;
}

.project-card:hover h4 {
  color: #0d47a1;
}

.project-card.active h4 {
  color: #1b5e20;
}

p {
  margin: 0;
  font-size: 14px;
  color: #555;
  line-height: 1.4;
}
</style>
