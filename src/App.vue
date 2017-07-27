<template>
  <div class="content">
    <header>
      <h1>multisaurus</h1>
      <p>(the best saurus)</p>
    </header>

    <section>
      <input v-model="wordInput" placeholder="Type a word and press enter" @keydown.enter="addWord">
      <word-list :words="words"></word-list>
    </section>

    <footer>
      Created by <a href="https://github.com/sambrosia">Sam Woodruff</a>
    </footer>
  </div>
</template>

<script>
import WordList from './WordList'

export default {
  components: { WordList },

  data () {
    return {
      wordInput: '',
      words: []
    }
  },

  methods: {
    addWord () {
      const word = this.wordInput
        .toLowerCase()
        .replace(/\s+/g, ' ')
        .replace(/[^a-z ]/g, '')
        .trim()

      if (word !== '' && !this.words.includes(word)) this.words.push(word)
      this.wordInput = ''
    },
    removeWord (word) {
      const index = this.words.indexOf(word)
      if (index < 0) return
      this.words.splice(index, 1)
    }
  }
}
</script>

<style lang="scss">
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
