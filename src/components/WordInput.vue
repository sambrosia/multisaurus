<template>
  <div class="word-input">
    <input class="input" v-model="newWord" placeholder="Type a word and press enter" @keydown.enter="addWord">
    <button class="button" @click="addWord">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="10 15 15 20 20 15"></polyline><path d="M4 4h7a4 4 0 0 1 4 4v12"></path></svg>
    </button>
  </div>
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
$shadow: 0 0 0 2px rgba($color-primary, 0.25);

.word-input {
  display: flex;
}

.input {
  flex: 1 0;
  width: 100%;
  padding: 10px;

  outline: none;
  border: $border;
  border-right: none;
  border-radius: $border-radius 0 0 $border-radius;

  transition: border-color $transition-time;
  font: inherit;

  &:focus {
    border-color: $color-primary;
    box-shadow: $shadow;
  }
}

.button {
  width: 38px;

  outline: none;
  border: none;
  border-color: $color-primary;
  border-radius: 0 $border-radius $border-radius 0;

  color: $color-bg;
  background: $color-primary;
  transition: background-color $transition-time;
  cursor: pointer;

  &:hover {
    background: $color-primary-dark;
  }

  &:focus {
    box-shadow: $shadow;
  }
}
</style>
