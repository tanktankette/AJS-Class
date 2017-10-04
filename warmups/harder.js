const makeBricks = (small, big, goal) => Math.min(big, Math.floor(goal / 5)) * 5 + small >= goal

console.assert(makeBricks(3, 1, 8) === true)
console.assert(makeBricks(3, 1, 9) === false)
console.assert(makeBricks(3, 2, 10) === true)