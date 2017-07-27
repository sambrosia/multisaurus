import synonyms from './synonyms'

export default {
  state: {
    words: [],
    synonyms: []
  },

  mutations: {
    addWord (state, word) {
      if (word !== '' && !state.words.includes(word)) state.words.push(word)
    },
    removeWord (state, word) {
      const index = state.words.indexOf(word)
      if (index < 0) return
      state.words.splice(index, 1)
    },
    setSynonyms (state, synonyms) {
      state.synonyms = synonyms
    }
  },

  actions: {
    addWord ({ commit, state }, word) {
      commit('addWord', word)
      commit('setSynonyms', synonyms(state.words))
    },
    removeWord ({ commit, state }, word) {
      commit('removeWord', word)
      commit('setSynonyms', synonyms(state.words))
    }
  }
}
