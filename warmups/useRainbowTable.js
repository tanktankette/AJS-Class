const LETTERS = 'acdekilmnoprstuy'
const bignum = require('bignum')
const fs = require('fs')

const hash = (s) => {
  let h = bignum(9)
  for (let i = 0; i < s.length; i++) {
    h = h.mul(83).add(LETTERS.indexOf(s[i]))
  }
  return h
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

/* 
Starts a loop of reducing then rehashing the target hash then checking to see if
it is an endpoint. If so, we run down the full chain of that endpoint and see if 
we can find the target hash in there. If found, the step before that in the chain
is the password
*/
const useRainbowTable = (table, target) => {
  let result
  let hashValue = target
  for (let i = 0; i < table.length; i++) {
    result = checkTable(table, hashValue)
    if (result !== -1) {
      console.log('Potential match found, checking chain')
      console.log('i', i)
      console.log(table[result])
      console.log(hashValue)
      result = checkChain(table[result][0], target, table.length)
      if (result !== -1) return result
    }
    hashValue = hash(reduceHash(hashValue))
  }
  return 'No match found'
}

// Goes down a chain to see if the target hash is in it
const checkChain = (chain, target, length) => {
  let hashValue = hash(chain)
  for (let i = 0; i < length; i++) {
    if (chain === 'persimmon') console.log('what')
    if (target.eq(hashValue)) return chain
    chain = reduceHash(hashValue)
    hashValue = hash(chain)
  }
  return -1
}

// Goes down the table to see if the given hashValue is one of the endpoints
const checkTable = (table, hashValue) => {
  for (let i = 0; i < table.length; i++) {
    if (hashValue.eq(table[i][1])) return i
  }
  return -1
}

// Loads a rainbow table
const loadTable = (fileName) => {
  let buffer = fs.readFileSync(fileName)
  let data = buffer.toString().split(',')
  let table = []
  while (data.length > 1) {
    table.push([data.shift(), bignum(data.shift())])
  }
  return table
}

let table = loadTable('rainbowtable.txt')
console.log(table)
console.log(useRainbowTable(table, bignum('1705070271736160785')))
