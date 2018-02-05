const rowLength = 3
const colLength = 5 

const plainText = 'attack at dawn'

function encrypt(plainText) {
  const matrix = []
  for (let i = 0; i < colLength; i++) {
    matrix.push([])
  }
  const split = plainText.split('')
  let splitCounter = 0;

  for (let i = 0; i < colLength; i++) {
    for (let j = 0; j < rowLength; j++) {
      const letter = split[splitCounter]
      if (letter) {
        matrix[i][j] = letter
      } else {
        matrix[i][j] = ' '
      }
      splitCounter += 1
    }
  }

  // we will switch rows 1 and 3, 5 and 2
  // we will switch col 2 and 3
  const rows = [
    [0, 2],
    [4, 1]
  ]
  const columns = [
    [1, 2]
  ]
  rows.forEach(swap => {
    const temp = [ ...matrix[ swap[0] ] ]
    matrix[ swap[0] ] = matrix[ swap[1] ]
    matrix[ swap[1] ] = temp
  })

  columns.forEach(swap => {
    for (let i = 0; i < colLength; i++) {
      const temp = matrix[i][ swap[0] ]
      matrix[i][ swap[0] ] = matrix[i][ swap[1] ]
      matrix[i][ swap[1] ] = temp
    }
  })

  let ciperText = ''
  matrix.forEach(row => {
    row.forEach(letter => {
      ciperText += letter
    })
  })
  return ciperText
}

function decrypt() {
  console.log(decrpyt)
}

console.log(encrypt(plainText))