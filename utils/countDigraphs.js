module.exports = countDigraphs

function countDigraphs(text) {
  const digraphs = {}

  for (let i = 0; i < text.length; i++) {
    const firstTwo = text.slice(i, i + 2)
    if (!digraphs[firstTwo]) {
      digraphs[firstTwo] = 1
    } else {
      digraphs[firstTwo] += 1
    }
  }

  const keys = Object.keys(digraphs)
  const digraphArray = keys.map(key => {
    return {
      digraph: key,
      frequency: digraphs[key]
    }
  })
  .filter(digraph => digraph.frequency > 1 && digraph.digraph.length === 2) // should we filter if less than 1
  .sort((a, b) => b.frequency - a.frequency)

  return digraphArray
}
