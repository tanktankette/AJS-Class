const nbrOfLaps = (bob, charles) => {
  let primes = getPrimes(Math.max(bob, charles) / 2)
  // console.log(primes)

  for (let prime of primes) {
    if (bob % prime === 0 && charles % prime === 0) {
      bob /= prime
      charles /= prime
    }
  }

  return [charles, bob]
}

const getPrimes = (max) => {
  let sieve = []
  let primes = []
  for (let i = 2; i <= max; ++i) {
    if (!sieve[i]) {
      // i has not been marked -- it is prime
      primes.push(i)
      for (let j = i << 1; j <= max; j += i) {
        sieve[j] = true
      }
    }
  }
  return primes
}

// Tests:

console.log(nbrOfLaps(5, 3)) // returns [3, 5]
console.log(nbrOfLaps(4, 6)) // returns [3, 2]
console.log(nbrOfLaps(13, 28)) // returns [ 28, 13 ]
console.log(nbrOfLaps(81, 3)) // returns [ 1, 27 ]
console.log(nbrOfLaps(51, 9)) // returns [ 3, 17 ]
