const countDuplicates = (str) => {
  let count = {}
  str = str.toLowerCase()

  for (let char of str) {
    if (char in count) {
      count[char] += 1
    } else {
      count[char] = 1
    }
  }
  for (let key in count) {
    if (count[key] > 1) {
      console.log(key + ' shows up ' + count[key] + ' times.')
    }
  }
}

// test = str.split("").reduce((count, char) => {
//   if (char in count){
//     count[char] += 1
//   } else {
//     count[char] = 1
//   }
//   return count
// }, {})

countDuplicates('thIsisaTest')
