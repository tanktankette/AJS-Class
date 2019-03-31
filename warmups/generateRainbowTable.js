const LETTERS = 'acdekilmnoprstuy'
const CHAINLENGTH = 5000
const bignum = require('bignum')
const fs = require('fs')

const hash = (s) => {
  let h = bignum(9)
  for (let i = 0; i < s.length; i++) {
    h = h.mul(83).add(LETTERS.indexOf(s[i]))
  }
  return h
}

// Genrates a random string to use as a starting point for a chain
const generateString = () => {
  let s = ''
  for (let i = 0; i < 9; i++) {
    s += LETTERS[Math.floor((Math.random() * LETTERS.length))]
  }
  return s
}

// Reduces a hash to a valid 9 character string
const reduceHash = (hash) => {
  let s = ''
  let letter
  for (let i = 0; i < 9; i++) {
    letter = hash.mod(977).mod(LETTERS.length).toNumber()
    s += LETTERS[letter]
    hash = hash.div(letter + 101).sub(13)
  }
  return s
}

// Function I used to test reducer by checking letter distribution
const testReducer = () => {
  let hashValue = hash(generateString())
  let results = Array(9).fill().map(() => Array(LETTERS.length).fill(0))
  for (let i = 0; i < 5000; i++) {
    hashValue = reduceHash(hashValue)
    for (let j = 0; j < hashValue.length; j++) {
      results[j][LETTERS.indexOf(hashValue[j])]++
    }
    hashValue = hash(hashValue)
  }
  console.log(results)
}

// Creates a rainbow table
const generateRainbowTable = () => {
  console.time('table')
  let table = []
  let start
  let end
  for (let i = 0; i < CHAINLENGTH; i++) {
    console.log(Math.round(i / CHAINLENGTH * 10000) / 100, '%')
    start = generateString()
    end = hash(start)
    for (let j = 0; j < CHAINLENGTH; j++) {
      end = hash(reduceHash(end))
    }
    table.push([start, end])
  }
  console.timeEnd('table')
  return table
}

const table = generateRainbowTable()

console.log(table)
fs.writeFile('rainbowtable.txt', table, (err) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('The file was saved!')
})
