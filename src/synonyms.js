import synonyms from 'synonyms'

const cache = {
  local: {}
}

export default (words) => {
  if (words.length < 1) return []
  const allSynonyms = []

  for (let word in words) {
    word = words[word]
    const raw = cache.local[word] || synonyms(word) || {}

    // Cache the results for this thesaurus/word ('local' is the thesaurus)
    cache.local[word] = raw

    for (const type in raw) {
      for (let synonym in raw[type]) {
        synonym = raw[type][synonym]

        if (synonym.length > 1 && allSynonyms.indexOf(synonym) < 0) {
          allSynonyms.push(synonym)
        }
      }
    }
  }

  return allSynonyms
}
