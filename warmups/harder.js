const makeBricks = (small, big, goal) => Math.min(big, Math.floor(goal / 5)) * 5 + small >= goal

console.assert(makeBricks(3, 1, 8) === true)
console.assert(makeBricks(3, 1, 9) === false)
console.assert(makeBricks(3, 2, 10) === true)

const loneSum = (...list) => list
  .filter((value) => list.filter((num) => num === value).length === 1)
  .reduce((total, value) => total + value, 0)

console.assert(loneSum(1, 2, 3) === 6)
console.assert(loneSum(3, 2, 3) === 2)
console.assert(loneSum(3, 3, 3) === 0)

const luckySum = (...list) => list
  .filter((value, i) => list.slice(0, i + 1).includes(13) === false)
  .reduce((total, value) => total + value)

console.assert(luckySum(1, 2, 3) === 6)
console.assert(luckySum(1, 2, 13) === 3)
console.assert(luckySum(1, 13, 3) === 1)
