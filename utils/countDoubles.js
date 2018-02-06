module.exports = countDoubles

function countDoubles(text) {
  const doubles = {}

  for (let i = 0; i < text.length; i++) {
    const firstLetter = text.slice(i, i + 1)
    const secondLetter = text.slice(i + 1, i + 2)
    if (firstLetter === secondLetter) {
      const count = doubles[firstLetter + secondLetter]
      doubles[firstLetter + secondLetter] = count ? count + 1 : 1
    }
  }

  const keys = Object.keys(doubles)
  const doublesArray = keys.map(key => {
    return {
      repeat: key,
      frequency: doubles[key]
    }
  }).sort((a, b) => b.frequency - a.frequency)

  return doublesArray
}
