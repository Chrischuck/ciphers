const textToNumbers = require('../utils/textToNumbers.js')

const numbers = []
for (let i = 0; i < 27; i++) {
  numbers.push(i)
}
const key = []

let index = numbers.length
while (index--) {
  const keyIndex = Math.floor(Math.random() * (index + 1))
  key.push(numbers[keyIndex])
  numbers.splice(keyIndex, 1)
}


const plainText = 'fourscoreandsevenyearsago'
const textKeys = Object.keys(textToNumbers)

const split = plainText.split('')
const numericalText = split.map(letter => textToNumbers[letter])

// encrypt the plaintext
const numericalCipherText = numericalText.map(number => key[number])
const cipherTextArray = numericalCipherText.map(number => textKeys[number])

let cipherText = ''

cipherTextArray.forEach(letter => {
  cipherText += letter
})

// decrypt the cipherText
const reverseNumericalCipher = cipherTextArray.map(letter => textToNumbers[letter])
const reverseNumericalDecipher = reverseNumericalCipher.map(number => key.indexOf(number))
const decipheredTextArray = reverseNumericalDecipher.map(number => textKeys[number])

let decipheredText = ''

decipheredTextArray.forEach(letter => {
  decipheredText += letter
})

// console logging
console.log(plainText)
console.log('\n')
console.log(cipherText)
console.log('\n')
console.log(decipheredText)