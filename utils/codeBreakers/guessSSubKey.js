const engLetterFreq = require('../data/engLetterFrequency')
const getLetterFreq = require('../letterFrequency')

module.exports = makeGuessKey

// known is a map of known
function makeGuessKey(text, known) {
  const textLetterFreq = getLetterFreq(text)

  const engLetterKeys = Object.keys(engLetterFreq)
  const textLetterKeys = Object.keys(textLetterFreq)

  const mappedEngLetters = engLetterKeys.map(letter => {
    return { letter, frequency: engLetterFreq[letter] }
  }).sort((a, b) => b.frequency - a.frequency)

  const mappedTextLetters = textLetterKeys.map(letter => {
    return { letter, frequency: textLetterFreq[letter] }
  }).sort((a, b) => b.frequency - a.frequency)

  const guessKey = {}

  mappedTextLetters.forEach((obj, index) => {
    if (known[obj.letter]) {
      guessKey[obj.letter] = { directReplacement: known[obj.letter], possibilities: [] }
    } else {
      const possibilities = mappedEngLetters
        .filter(i => i.frequency < obj.frequency + .002 && i.frequency > obj.frequency - .002 )
        .map(i => i.letter)
      const guessKeyValues = Object.values(guessKey)
      const used = guessKeyValues.map(key => key.directReplacement)

      if (used.includes(mappedEngLetters[index].letter)) {
        possibilities.filter(i => !used.includes(i))
        guessKey[obj.letter] = { directReplacement: possibilities[0], possibilities }
      } else {
        guessKey[obj.letter] = { directReplacement: mappedEngLetters[index].letter, possibilities }
      }

    }
  })
  return guessKey
}
