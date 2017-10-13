// for (var i = 0; i < 5; i++) {
//   setTimeout(function(n) { console.log(n); }, i * 1000, i);
// }


for (let i = 0; i < 5; i++) {
  setTimeout(function() { console.log(i); }, i * 1000);
}