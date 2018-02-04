const textToNumbers = require('../utils/textToNumbers.js')

const plainText = 'fourscoreandsevenyearsago'

const shift = 3
const keys = Object.keys(textToNumbers)

const cipherText = encrypt(plainText)
const decipheredText = decrypt(cipherText)

// console logging
console.log('\n')
console.log(plainText)
console.log(cipherText)
console.log(decipheredText)


function encrypt(plainText) {
  const split = plainText.split('')
  const numericalText = split.map(letter => textToNumbers[letter])
  const numericalCipher = numericalText.map(number => (number + shift) % 27)
  const cipherTextArray = numericalCipher.map(number => keys[number])
  // transform array into string
  let cipherText = ''
  cipherTextArray.forEach(letter => {
    cipherText += letter
  })
  return cipherText
}

function decrypt(cipherText) {
  const split = cipherText.split('')
  const numericalCipher = split.map(letter => textToNumbers[letter])
  const reverseNumericalCipher = numericalCipher.map(number => (number + 27 - shift) % 27)
  const reverseCipherTextArray = reverseNumericalCipher.map(number => keys[number])
  
  // transform array into string
  let decipheredText = ''
  reverseCipherTextArray.forEach(letter => {
    decipheredText += letter
  })
  return decipheredText
}