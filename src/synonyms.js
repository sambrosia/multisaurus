import synonyms from 'synonyms'

export default (words) => {
  if (words.length < 1) return []
  const allSynonyms = []

  for (let word in words) {
    word = words[word]
    const raw = synonyms(word) || {}

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
