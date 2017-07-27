<template>
  <div class="main">
    <header>
      <h1>multisaurus</h1>
      <p>(the best saurus)</p>
    </header>

    <section>
      <word-input></word-input>
      <word-list></word-list>
      <synonym-list></synonym-list>
    </section>

    <footer>
      Created by <a href="https://github.com/sambrosia">Sam Woodruff</a>
    </footer>
  </div>
</template>

<script>
import WordInput from './WordInput'
import WordList from './WordList'
import SynonymList from './SynonymList'

export default {
  components: { WordInput, WordList, SynonymList }
}
</script>

<style lang="scss">
.main {
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
