const textToNumbers = require('../utils/textToNumbers.js')

const plainText = 'fourscoreandsevenyearsago'

const shift = 3

// encrypt the plaintext
const split = plainText.split('')

const numericalText = split.map(letter => textToNumbers[letter])

const numericalCipher = numericalText.map(number => (number + shift) % 27)

const keys = Object.keys(textToNumbers)

const cipherTextArray = numericalCipher.map(number => keys[number])

let cipherText = ''

cipherTextArray.forEach(letter => {
  cipherText += letter
})

// decripyt the ceaser cipher
const reverseNumericalCipher = numericalCipher.map(number => (number + 27 - shift) % 27)
const reverseCipherTextArray = reverseNumericalCipher.map(number => keys[number])

let decipheredText = ''

reverseCipherTextArray.forEach(letter => {
  decipheredText += letter
})

// console logging
console.log(plainText)
console.log('\n')
console.log(cipherText)
console.log('\n')
console.log(decipheredText)