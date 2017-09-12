<template>
  <input v-model="newWord" placeholder="Type a word and press enter" @keydown.enter="addWord">
</template>

<script>
export default {
  name: 'word-input',

  data () {
    return { newWord: '' }
  },

  methods: {
    addWord () {
      const word = this.newWord
        .toLowerCase()
        .replace(/\s+/g, ' ')
        .replace(/[^a-z -]/g, '')
        .trim()

      this.$store.dispatch('addWord', word)
      this.newWord = ''
    }
  }
}
</script>

<style scoped lang="scss">
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
</style>
