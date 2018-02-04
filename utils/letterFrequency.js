module.exports = letterFrequency

function letterFrequency(text) {
  const frequencyMap = {}
  // turn text into array and remove spaces
  const splitText = text
    .split('')
    .filter(letter => letter !== ' ')

  splitText.forEach(letter => {
    if (!frequencyMap[letter]) {
      frequencyMap[letter] = 1
    } else {
      frequencyMap[letter] += 1
    }
  })

  const mapKeys = Object.keys(frequencyMap)
  // turn into precentage
  mapKeys.forEach(key => {
    frequencyMap[key] = frequencyMap[key] / splitText.length
  })

  return frequencyMap
}
