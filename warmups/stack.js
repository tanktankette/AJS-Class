class Stack {
  constructor () {
    this.lst = []
  }
  pop () {
    if (this.lst.length > 0) return this.lst.shift()
    else throw new Error('Stack is empty')
  }
  push (v) {
    if ('+-*/'.includes(v)) {
      const valTwo = this.pop()
      const valOne = this.pop()
      this.lst.unshift(eval(valOne + v + valTwo))
    } else if ('1234567890'.includes(v)) {
      this.lst.unshift(v)
    }
  }
  parse (s) {
    for (let c of s) {
      this.push(c)
    }
    if (this.lst.length === 0) throw new Error('Ended with empty string')
    else return this.lst[0]
  }
}

let a = new Stack()

console.log(a.parse('13+62*7+*'))
