module.exports = countTrigraphs

function countTrigraphs(text) {
  const trigraphs = {}

  for (let i = 0; i < text.length; i++) {
    const firstThree = text.slice(i, i + 3)
    if (!trigraphs[firstThree]) {
      trigraphs[firstThree] = 1
    } else {
      trigraphs[firstThree] += 1
    }
  }

  const keys = Object.keys(trigraphs)
  const trigraphArray = keys.map(key => {
    return {
      trigraph: key,
      frequency: trigraphs[key]
    }
  })
  .filter(trigraph => trigraph.frequency > 1 && trigraph.trigraph.length === 3)
  .sort((a, b) => b.frequency - a.frequency)

  return trigraphArray
}
