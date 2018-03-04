const textToNumbers = require('../../utils/data/textToNumbers.js')

// setup and creating the key
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

const cipherText = encrypt(plainText)
const decipheredText = decrypt(cipherText)

// console logging
console.log('\n')
console.log(key)
console.log('\n')
console.log(plainText)
console.log(cipherText)
console.log(decipheredText)

function encrypt(plainText) {
  const split = plainText.split('')
  const numericalText = split.map(letter => textToNumbers[letter])
  
  const numericalCipherText = numericalText.map(number => key[number])
  const cipherTextArray = numericalCipherText.map(number => textKeys[number])
  
  let cipherText = ''
  cipherTextArray.forEach(letter => {
    cipherText += letter
  })
  return cipherText
}

function decrypt(cipherText) {
  const split = cipherText.split('')
  const reverseNumericalCipher = split.map(letter => textToNumbers[letter])
  const reverseNumericalDecipher = reverseNumericalCipher.map(number => key.indexOf(number))
  const decipheredTextArray = reverseNumericalDecipher.map(number => textKeys[number])
  
  let decipheredText = ''
  decipheredTextArray.forEach(letter => {
    decipheredText += letter
  })
  return decipheredText
}