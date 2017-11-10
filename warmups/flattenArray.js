const flattenArray = (list) => {
  let result = []
  for (let elem of list) {
    result = result.concat(typeof elem === 'object' ? flattenArray(elem) : [elem])
  }
  return result
}

console.log(flattenArray([1, 2, [3, [4], 5, 6], 7]))

const cheatFlattenArray = (list) => {
  return list.join().split(',').map((x) => parseInt(x))
}

const unflattenedUnsortedArray1 = [7, 3, [2, [9], 5, 6], 8, 1, [0], 4]

console.log(cheatFlattenArray(unflattenedUnsortedArray1))
