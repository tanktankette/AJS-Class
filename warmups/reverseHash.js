const bignum = require('bignum')
const LETTERS = 'acdekilmnoprstuy'

// Turns an array of letter indicies into a human readable string
const parsePassword = (password) => {
  return password.map((i) => LETTERS[i]).join('')
}

// This function can reverse the hash by reducing it to powers of 83 then using how many of each
// power exist to look up the correct letter
const reverseHash = (hashValue) => {
  const powers = [bignum(1)]
  while (powers[powers.length - 1].lt(hashValue)) powers.push(powers[powers.length - 1].mul(83))
  let password
  let first = false
  for (let i = powers.length - 1; i >= 0; i--) {
    if (hashValue.gt(powers[i])) {
      if (first === false) {
        password = Array(i - 1).fill(0)
        first = true
      } else {
        password[password.length - i] = hashValue.div(powers[i]).toNumber()
      }
      hashValue = hashValue.mod(powers[i])
    }
  }
  return parsePassword(password)
}

console.log(reverseHash(bignum('1705070271736160785')))
