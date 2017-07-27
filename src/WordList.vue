<template>
  <div class="word-list">
    <div class="word" v-for="word in words" :key="word" @click="removeWord(word)">{{word}}</div>
  </div>
</template>

<script>
export default {
  name: 'word-list',
  props: ['words']
}
</script>

<style lang="scss">
.word-list {
  padding-top: 10px;
  margin: 0 -5px 0 -5px;
  display: flex;
  flex-wrap: wrap;
}

.word {
  margin: 5px;
  padding: 10px;
  border-radius: $border-radius;
  background: $color-primary;
  color: white;

  cursor: pointer;
  transition: background $transition-time;

  &:hover {
    background: $color-red;
  }
}
</style>
