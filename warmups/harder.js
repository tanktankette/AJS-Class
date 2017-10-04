const makeBricks = (small, big, goal) => {
    return Math.min(big, Math.floor(goal / 5)) * 5 + small >= goal
}

console.assert(makeBricks(3, 1, 8) === true)
console.assert(makeBricks(3, 1, 9) === false)
console.assert(makeBricks(3, 2, 10) === true)

console.log(makeBricks(3, 1, 8))
console.log(makeBricks(3, 1, 9))
console.log(makeBricks(3, 2, 10))