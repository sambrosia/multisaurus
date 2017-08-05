<template>
  <div class="synonym-list">
    <div class="synonym" v-for="(rank, synonym) in synonyms" :key="synonym" @click="addWord(synonym)">
      {{synonym}} ({{rank}})
    </div>
  </div>
</template>

<script>
export default {
  name: 'word-list',

  computed: {
    synonyms () { return this.$store.state.synonyms }
  },

  methods: {
    addWord (word) {
      this.$store.dispatch('addWord', word)
    }
  }
}
</script>

<style lang="scss">
.synonym-list {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px 0 -10px;
}

.synonym {
  margin: 10px;
  font: 27px 'Slabo 27px', sans-serif;
  line-height: 0.8;

  cursor: pointer;
  transition: color $transition-time;

  &:hover {
    color: $color-primary;
  }
}
</style>
