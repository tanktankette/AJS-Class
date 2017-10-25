const xbonacci = (signature, n) => {
  let len = signature.length
  while (signature.length < n) {
    signature.push(signature.slice(signature.length - len, signature.length)
      .reduce((total, v) => total + v, 0))
  }
  return signature
}

console.log(xbonacci([1, 1, 1], 10))
