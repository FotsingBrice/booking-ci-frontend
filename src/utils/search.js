import { synonyms } from '../data/keywords.js'

const flatten = Object.values(synonyms).flat()
const dict = new Set(flatten.map(w => w.toLowerCase()))

export function matchTerm(userInput, text) {
  const words = userInput.toLowerCase().split(/\W+/)
  const txt = text.toLowerCase()
  return words.some(w => txt.includes(w) || dict.has(w))
}