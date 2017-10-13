// for (var i = 0; i < 5; i++) {
//   setTimeout(function(n) { console.log(n); }, i * 1000, i);
// }


// for (let i = 0; i < 5; i++) {
//   setTimeout(function() { console.log(i); }, i * 1000);
// }

const change_return = (coins, total) => {
  return coins.reduce((counts, coin, i) => {
    counts[coin] = Math.floor(total / coin)
  }, {})
}
// console.log([25, 12, 5] + 1)
console.log(change_return([25, 10, 5, 1], 127))
