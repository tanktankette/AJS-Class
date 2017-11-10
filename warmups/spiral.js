const generatePath = (size) => {
  const left = [-1, 0]
  const right = [1, 0]
  const up = [0, -1]
  const down = [0, 1]
  let path = [[0, 0]]
  for (let i = 0; i < size; i++) {
    path = path.concat(generateStep(i * 2 + 1, path[path.length - 1], up))
    path = path.concat(generateStep(i * 2 + 1, path[path.length - 1], left))
    path = path.concat(generateStep(i * 2 + 2, path[path.length - 1], down))
    path = path.concat(generateStep(i * 2 + 2, path[path.length - 1], right))
  }
  path = path.concat(generateStep(size * 2, path[path.length - 1], up))
  return path
}

const generateStep = (step, start, direction) => {
  let output = []
  for (let i = 1; i < step + 1; i++) {
    output.push([start[0] + direction[0] * i, start[1] + direction[1] * i])
  }
  return output
}

const spiral = (sizeX, sizeY, startX, startY) => {
  let output = []
  const path = generatePath(Math.max(sizeX - startX, sizeY - startY))
  for (let point of path) {
    let x = startX + point[0]
    let y = startY + point[1]
    if (x > 0 && x <= sizeX && y > 0 && y <= sizeY) {
      // console.log(x, y)
      output.push(x + (y - 1) * sizeX)
    }
  }
  return output
}

console.log(spiral(4, 2, 2, 1).join(', '))
