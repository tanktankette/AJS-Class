const sumDigPow = (start, end) => {
  return [...Array(end - start + 1).keys()]
    .map((value) => (value + start).toString().split('')
      .map((v) => parseInt(v))
      .reduce((total, value, index) => total + value ** (index + 1), 0))
    .filter((v, i) => v === i + start)
}

console.log(sumDigPow(1, 10000000))
