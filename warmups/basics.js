const notString = (s) => {
    if(s.startsWith('not')){
        return s
    }
    return 'not ' + s
}

console.log(notString('candy')) // 'not candy'
console.log(notString('x')) // 'not x'
console.log(notString('not bad')) // 'not bad'


const missingChar = (s, i) => {
    return s.slice(0, i) + s.slice(i + 1, s.length)
}

console.log(missingChar('kitten', 1)) // 'ktten'
console.log(missingChar('kitten', 0)) // 'itten'
console.log(missingChar('kitten', 4)) // 'kittn'

const front3 = (s) => {
    return s.slice(0,3) + s.slice(0,3) + s.slice(0,3)
}

console.log(front3('test'))

const stringTimes = (string, times) => {
    let out = ""
    for (let i = 0; i < times; i++){
        out += string
    }
    return out
}

console.log(stringTimes('Hi', 2)) // 'HiHi'
console.log(stringTimes('Hi', 3)) // 'HiHiHi'
console.log(stringTimes('Hi', 1)) // 'Hi'