const abbreviateSentence = (str) => {
  str = str.split(' ')
  let words = []
  for (let word of str) {
    words.push(abbreviateWord(word))
  }
  return words.join(' ')
}

const abbreviateWord = (str) => {
  let punc = ''
  if ('!?.,'.includes(str[str.length - 1])) {
    punc = str[str.length - 1]
    str = str.slice(0, str.length - 1)
  }

  if (str.includes('-')) {
    let words = str.split('-')
    return abbreviateWord(words[0]) + '-' + abbreviateWord(words[1]) + punc
  } else if (str.length > 3) {
    return str[0] + (str.length - 2) + str[str.length - 1] + punc
  } else {
    return str + punc
  }
}

console.log(abbreviateSentence('elephant-rides are really fun!'))
