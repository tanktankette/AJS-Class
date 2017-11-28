const threatens = (qX, qY, kX, kY) => {
  return qX === kX || qY === kY || Math.abs(qX - kX) === Math.abs(qY - kY)
}

console.log(threatens(3, 6, 1, 6))
