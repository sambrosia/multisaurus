import synonyms from 'synonyms'

// TODO: Query Wiktionary (and others?)
// TODO: Clean up misplaced commas (???) in results

const cache = {
  local: {}
}

export default (words) => {
  if (words.length < 1) return []
  const allSynonyms = {}

  for (const word of words) {
    const raw = cache.local[word] || synonyms(word) || {}

    // Cache the results for this thesaurus/word ('local' is the thesaurus)
    cache.local[word] = raw

    for (const type in raw) {
      for (const syn in raw[type]) {
        const synonym = raw[type][syn]

        if (synonym.length > 1) {
          if (allSynonyms[synonym] !== undefined) allSynonyms[synonym]++
          else allSynonyms[synonym] = 0
        }
      }
    }
  }

  return allSynonyms
}
