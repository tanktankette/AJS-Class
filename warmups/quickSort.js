const quickSort = (list) => {
  if (Math.max(...list) === Math.min(...list) || list.length < 2) return list

  const pivot = list[0]
  let low = []
  let high = []
  for (let num of list) {
    num <= pivot ? low.push(num) : high.push(num)
  }

  return quickSort(low).concat(quickSort(high))
}

console.log(quickSort([1, 6, 4, 7, 5, 9, 8, 0, 2, 3, 1, 6, 4, 7, 5, 9, 8, 0, 2, 3]))
