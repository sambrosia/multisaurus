import synonyms from 'synonyms'

export default async function (words) {
  if (words.length < 1) return
  return synonyms(words[0])
}
