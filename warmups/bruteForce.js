const bignum = require('bignum')
const LETTERS = 'acdekilmnoprstuy'

// Turns an array of letter indicies into a human readable string
const parsePassword = (password) => {
  return password.map((i) => LETTERS[i]).join('')
}

const hash = (s) => {
  let h = bignum(9)
  for (let i = 0; i < s.length; i++) {
    h = h.mul(83).add(LETTERS.indexOf(s[i]))
  }
  return h
}

// Brute forces the hash by trying every valid combination of letters. Takes a very long time
const bruteForce = (target) => {
  let password = [0]
  while (hash(parsePassword(password)).eq(target) === false) {
    password[0]++
    for (let i = 0; password[i] >= LETTERS.length && i < password.length; i++) {
      password[i] = 0
      if (i === password.length - 1) {
        password.push(0)
        console.log(password)
      } else password[i + 1]++
    }
  }
  return parsePassword(password)
}

console.log(bruteForce(bignum('1705070271736160785')))
