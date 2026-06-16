<template>
  <div class="site-layout">
    <header class="header">
      <div class="logo">⚛</div>
      <h1>React Site</h1>
    </header>

    <div class="body">
      <main class="main">
        <section>
          <h2>Angular</h2>
          <p>
            Angular to framework do budowy aplikacji webowych opracowany przez Google.
            Umożliwia tworzenie dynamicznych interfejsów użytkownika.
          </p>
        </section>

        <section>
          <h2>Vue</h2>
          <p>
            Vue.js to progresywny framework JavaScript do tworzenia interfejsów.
            Jest łatwy w nauce i dobrze integruje się z innymi projektami.
          </p>
        </section>

        <section>
          <h2>Express.js</h2>
          <p>
            Express.js to minimalistyczny framework dla Node.js, który ułatwia
            tworzenie serwerów i API REST.
          </p>
        </section>
      </main>

      <aside class="sidebar">
        <h3>Technologie</h3>
        <ul>
          <li>Angular</li>
          <li>Vue</li>
          <li>Express.js</li>
        </ul>
      </aside>
    </div>

    <footer class="footer">
      <p>&copy; 2026 React Site. All rights reserved.</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'SiteLayout'
}
</script>

<style scoped>
.site-layout {
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  background: #fff;
}

.header {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #282c34;
  color: #fff;
  padding: 16px 20px;
}

.logo {
  width: 40px;
  height: 40px;
  background: #61dafb;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  color: #282c34;
}

.header h1 {
  margin: 0;
  font-size: 24px;
}

.body {
  display: flex;
  min-height: 280px;
}

.main {
  flex: 1;
  padding: 20px;
}

.main section {
  margin-bottom: 20px;
}

.main h2 {
  margin: 0 0 8px;
  color: #2c3e50;
}

.main p {
  margin: 0;
  color: #555;
  line-height: 1.5;
}

.sidebar {
  width: 180px;
  background: #f0f0f0;
  padding: 20px;
  border-left: 1px solid #ddd;
}

.sidebar h3 {
  margin: 0 0 12px;
  font-size: 16px;
}

.sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.sidebar li {
  padding: 6px 0;
  border-bottom: 1px solid #ddd;
  color: #333;
}

.footer {
  background: #282c34;
  color: #aaa;
  text-align: center;
  padding: 12px;
  font-size: 14px;
}

.footer p {
  margin: 0;
}
</style>
