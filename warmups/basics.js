const notString = (s) => {
    if(s.startsWith('not')){
        return s
    }
    return 'not ' + s
}

console.assert(notString('candy') === 'not candy')
console.assert(notString('x') === 'not x')
console.assert(notString('not bad') === 'not bad')


const missingChar = (s, i) => {
    return s.slice(0, i) + s.slice(i + 1, s.length)
}

console.assert(missingChar('kitten', 1) === 'ktten')
console.assert(missingChar('kitten', 0) === 'itten')
console.assert(missingChar('kitten', 4) === 'kittn')

const front3 = (s) => {
    return s.slice(0,3) + s.slice(0,3) + s.slice(0,3)
}

console.assert(front3('test') === 'testestes')

const stringTimes = (string, times) => {
    let out = ''
    for (let i = 0; i < times; i++) {
        out += string
    }
    return out
}

console.assert(stringTimes('Hi', 2) === 'HiHi')
console.assert(stringTimes('Hi', 3) === 'HiHiHi')
console.assert(stringTimes('Hi', 1) === 'Hi')

const stringBits = (string) => {
    let out = ''
    for (let i = 0; i < string.length; i+=2) {
        out += string[i]
    }
    return out
}

console.assert(stringBits('Hello') === 'Hlo')
console.assert(stringBits('Hi') === 'H')
console.assert(stringBits('Heeololeo') === 'Hello')