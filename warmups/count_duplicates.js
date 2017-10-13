const countDuplicates = (str) => {
  let count = {}
  str = str.toLowerCase()

  console.log(test)

  for (let char of str) {
    if (char in count){
      count[char] += 1
    } else {
      count[char] = 1
    }
  }
  for (let key in count){
    if (count[key] > 1){
      console.log(key + " shows up " + count[key] + " times.")
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

count_duplicates("thIsisaTest")