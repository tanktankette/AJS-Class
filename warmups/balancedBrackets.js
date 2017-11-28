const OPENTAGS = '{[('
const CLOSETAGS = '}])'

const balancedBrackets = (s) => {
  let brackets = []
  for (let char of s) {
    if (OPENTAGS.includes(char)) {
      brackets.push(char)
    } else if (CLOSETAGS.includes(char)) {
      let bracket = brackets.pop()
      if (!((bracket === '{' && char === '}') ||
            (bracket === '[' && char === ']') ||
            (bracket === '(' && char === ')'))) {
        return false
      }
    } else {
      return false
    }
  }
  return brackets.length === 0
}

console.log(balancedBrackets('()[]{}(([])){[()][]}'))
console.log(balancedBrackets('({)}'))
console.log(balancedBrackets('()[]{(([])){[()][]}'))
