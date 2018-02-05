module.exports = countTrigraphs

function countTrigraphs(text) {
  const trigraphs = {}
  let textCopy = text

  for (let i = 0; i < textCopy.length; i++) {
    const firstThree = textCopy.slice(0, 3)
    if (!trigraphs[firstThree]) {
      trigraphs[firstThree] = 1
    } else {
      trigraphs[firstThree] += 1
    }
    textCopy = textCopy.slice(1)
  }

  const keys = Object.keys(trigraphs)
  const trigraphArray = keys.map(key => {
    return {
      trigraph: key,
      frequency: trigraphs[key]
    }
  })
  .filter(trigraph => trigraph.frequency > 1)
  .sort((a, b) => b.frequency - a.frequency)

  return trigraphArray
}
