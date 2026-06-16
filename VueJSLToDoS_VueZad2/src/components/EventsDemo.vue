<template>
  <section class="events-demo">
    <h2>Events</h2>

    <div class="buttons">
      <button type="button" @click="onButtonClick">Button</button>
      <button type="button" @click="onClick">click</button>
    </div>

    <p v-if="message" class="message">{{ message }}</p>

    <h3>Double click + mouse move</h3>
    <div
      class="square"
      :style="{ backgroundColor: squareColor }"
      @dblclick="onDoubleClick"
      @mousemove="onMouseMove"
    ></div>

    <div class="input-block">
      <input v-model="inputText" type="text" placeholder="Wpisz tekst" />
      <p class="normal">{{ inputText }}</p>
      <p class="bold">{{ inputText }}</p>
    </div>
  </section>
</template>

<script>
export default {
  name: 'EventsDemo',
  data() {
    return {
      message: '',
      squareColor: '#61dafb',
      inputText: ''
    }
  },
  methods: {
    onButtonClick() {
      this.message = 'Kliknięto Button'
    },
    onClick() {
      this.message = 'Kliknięto click'
    },
    onDoubleClick() {
      this.squareColor = '#ff6b6b'
      this.message = 'Double click na kwadracie'
    },
    onMouseMove() {
      this.squareColor = '#42b983'
    }
  }
}
</script>

<style scoped>
.events-demo {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 30px;
}

.events-demo h2,
.events-demo h3 {
  color: #2c3e50;
}

.buttons {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}

.buttons button {
  padding: 8px 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  background: #f5f5f5;
  cursor: pointer;
}

.message {
  color: #555;
  font-style: italic;
  margin-bottom: 16px;
}

.square {
  width: 120px;
  height: 120px;
  border: 2px solid #333;
  margin: 10px 0 20px;
  transition: background-color 0.15s;
}

.input-block input {
  width: 100%;
  max-width: 300px;
  padding: 8px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
}

.input-block .normal {
  margin: 4px 0;
}

.input-block .bold {
  margin: 4px 0;
  font-weight: bold;
}
</style>
