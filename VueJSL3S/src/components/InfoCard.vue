<template>
  <div class="info-card">
    <header class="info-card-header">
      <slot name="header"></slot>
    </header>
    <div class="info-card-body">
      <slot></slot>
    </div>
    <footer class="info-card-footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'InfoCard'
}
</script>

<style scoped>
.info-card {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
}

.info-card-header {
  background: #42b983;
  color: #fff;
  padding: 12px 16px;
  font-weight: bold;
}

.info-card-body {
  padding: 16px;
}

.info-card-footer {
  padding: 12px 16px;
  border-top: 1px solid #eee;
  background: #fafafa;
}
</style>
