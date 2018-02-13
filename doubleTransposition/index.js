const rowLength = 3
const colLength = 5 

const transpositions = {
  rows: [
    [0, 2],
    [4, 1]
  ],
  columns: [
    [1, 2]
  ]
}

const plainText = 'attack at dawn'

function encrypt(plainText, transpositions, rowLength, colLength) {
  const matrix = []
  const { rows, columns } = transpositions

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



function decrypt(cipherText, transpositions, rowLength, colLength) {
  const matrix = []
  const { rows, columns } = transpositions
  // reverse rows and columns
  
  for (let i = 0; i < colLength; i++) {
    matrix.push([])
  }
  const split = cipherText.split('')
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

  let plainText = ''
  matrix.forEach(row => {
    row.forEach(letter => {
      plainText += letter
    })
  })
  return plainText
}

const cipherText = encrypt(plainText, transpositions, rowLength, colLength)
const plainText = decrypt(cipherText, transpositions, rowLength, colLength)