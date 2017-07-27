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

      this.$store.commit('addWord', word)
      this.newWord = ''
    }
  }
}
</script>

<style lang="scss">
</style>
