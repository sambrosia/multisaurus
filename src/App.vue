<template>
  <div class="content">
    <header>
      <h1>multisaurus</h1>
      <p>(the best saurus)</p>
    </header>
    <section>
      <input v-model="wordInput" placeholder="Type a word and press enter" @keydown.enter="addWord">
    </section>
    <footer>
      Created by <a href="https://github.com/sambrosia">Sam Woodruff</a>
    </footer>
  </div>
</template>

<script>
// import synonyms from 'synonyms'

export default {
  data () {
    return {
      wordInput: '',
      words: []
    }
  },

  methods: {
    addWord () {
      const word = this.wordInput.toLowerCase()
      if (!this.words.includes(word)) this.words.push(word)
      this.wordInput = ''
    }
  }
}
</script>

<style lang="scss">
html {
  background: $color-bg;
  font: 13px 'Slabo 13px', sans-serif;
}

body {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
}

h1 {
  font: 48px 'Josefin Slab', serif;
}

input {
  width: 100%;
  padding: 10px;
  border: $border;
  border-radius: $border-radius;
  box-sizing: border-box;
  transition: border-color $transition-time;
  font-family: inherit;

  &:focus {
    border-color: $color-primary;
    outline: none;
  }
}

.content {
  margin: 40px;
  width: 800px;
  flex-grow: 1;
  text-align: center;

  display: flex;
  flex-direction: column;

  header {
    overflow: auto;
    border-radius: $border-radius $border-radius 0 0;
    background: $color-primary;
    color: white;

    h1 {
      margin-bottom: 0;
    }
    p {
      margin-top: 0;
    }
  }

  section, footer {
    padding: 20px;
    border: $border;

    a {
      transition: color $transition-time;
      color: $color-primary;

      &:hover {
        color: darken($color-primary, 10)
      }
    }
  }

  section {
    border-top: none;
    border-bottom: none;
    flex-grow: 1;
    color: $color-dark;
  }

  footer {
    border-top: none;
    border-radius: 0 0 $border-radius $border-radius;

    color: $color-dark;
  }
}
</style>
