const invest = (args) => {
  const p = args.p || -1
  const d = args.d || -1
  const t = args.t || -1
  const i = args.i || -1
  const y = args.y || -1

  if (y === -1) return Math.log(d / p) / Math.log(1 + i - i * t)
  if (d === -1) return p * (1 + i - i * t) ** y
  if (p === -1) return d / (1 + i - i * t) ** y
  if (t === -1) return 1 - ((d / p) ** (1 / y) - 1) / i
  if (i === -1) return ((d / p) ** (1 / y) - 1) / (1 - t)
}

/*
y = Math.log(d / p) / Math.log(1 + i - i * t)
d = p * (1 + i - i * t) ** y
p = d / (1 + i - i * t) ** y
t = 1 - ((d/p)**(1/y) - 1) / i
i = ((d/p)**(1/y) - 1) / (1 - t)
*/

console.log(invest({p: 1000, i: 0.05, t: 0.18, d: 1100}))
console.log(invest({p: 1000, i: 0.05, t: 0.18, y: 2}))
