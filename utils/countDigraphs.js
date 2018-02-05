module.exports = countDigraphs

function countDigraphs(text) {
  const digraphs = {}
  let textCopy = text

  for (let i = 0; i < textCopy.length; i++) {
    const firstTwo = textCopy.slice(0, 2)
    if (!digraphs[firstTwo]) {
      digraphs[firstTwo] = 1
    } else {
      digraphs[firstTwo] += 1
    }
    textCopy = textCopy.slice(1)
  }

  const keys = Object.keys(digraphs)
  const digraphArray = keys.map(key => {
    return {
      digraph: key,
      frequency: digraphs[key]
    }
  })
  .filter(digraph => digraph.frequency > 1) // should we filter out trigraphs of 1?
  .sort((a, b) => b.frequency - a.frequency)

  return digraphArray
}