// const outlier = (list) => {
//   const mod = list.map((v) => v % 2)
//   let index = mod.indexOf(0)
//   mod[index] = 2
//   if (mod.indexOf(0) === -1) {
//     return [list[index], index]
//   } else {
//     return [list[mod.indexOf(1)], mod.indexOf(1)]
//   }
// }

const outlier = (list) => {
  const index = Math.abs(list.reduce((total, v, i) => {
    if (total > 0) return v % 2 === list[0] % 2 ? total : -i
    return v % 2 === list[-total] % 2 ? 0 : total
  }, 1))
  return [list[index], index]
}

console.log(outlier([1, 32, 5, 7, 9, 11, 13, 1]))
