export default {
  state: {
    words: []
  },

  mutations: {
    addWord (state, word) {
      if (word !== '' && !state.words.includes(word)) state.words.push(word)
    },
    removeWord (state, word) {
      const index = state.words.indexOf(word)
      if (index < 0) return
      state.words.splice(index, 1)
    }
  },

  actions: {}
}
