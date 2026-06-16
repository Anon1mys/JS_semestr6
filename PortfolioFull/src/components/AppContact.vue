<template>
  <div class="contact-page">
    <h2>Contact</h2>
    <div class="contact-box">
      <p><strong>Email:</strong> maksym.leskiv@example.com</p>
      <p><strong>Telefon:</strong> +48 123 456 789</p>

      <form class="contact-form" @submit.prevent="sendMessage">
        <input v-model="form.name" type="text" placeholder="Imię i nazwisko" />
        <input v-model="form.email" type="email" placeholder="Email" />
        <textarea v-model="form.message" placeholder="Wiadomość" rows="4"></textarea>
        <button type="submit">Wyślij</button>
      </form>

      <p v-if="sent" class="sent-info">Wiadomość została wysłana (demo).</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AppContact',
  data() {
    return {
      sent: false,
      form: {
        name: '',
        email: '',
        message: ''
      }
    }
  },
  methods: {
    sendMessage() {
      this.sent = true
      this.form = { name: '', email: '', message: '' }
    }
  }
}
</script>

<style scoped>
.contact-page {
  width: 70%;
  margin: 20px auto;
  padding: 10px;
}

h2 {
  text-align: center;
  color: #1b5e20;
}

.contact-box {
  background: #a5d6a7;
  border: 1px solid #81c784;
  border-radius: 8px;
  padding: 20px;
}

.contact-box p {
  margin: 8px 0;
}

.contact-form {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.contact-form input,
.contact-form textarea {
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: inherit;
}

.contact-form button {
  align-self: flex-start;
  padding: 8px 20px;
  background: #2e7d32;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.sent-info {
  margin-top: 12px;
  color: #1b5e20;
  font-weight: bold;
}
</style>
