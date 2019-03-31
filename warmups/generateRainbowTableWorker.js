const LETTERS = 'acdekilmnoprstuy'
const CHAINLENGTH = 100000
const BigNumber = require('bignumber.js')
const { parentPort } = require('worker_threads')

const hash = (s) => {
  let h = BigNumber(9)
  for (let i = 0; i < s.length; i++) {
    h = h.times(83).plus(LETTERS.indexOf(s[i]))
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
    hash = hash.idiv(letter + 101).minus(13)
  }
  return s
}

let start, end
let table = []

for (let i = 0; i < CHAINLENGTH / 4; i++) {
  start = generateString()
  end = hash(start)
  parentPort.postMessage(Math.round(i / (CHAINLENGTH / 4) * 10000) / 100 + '%')
  for (let j = 0; j < 5000; j++) {
    end = hash(reduceHash(end))
  }
  table.push([start, end.toString()])
}
parentPort.postMessage(table)
