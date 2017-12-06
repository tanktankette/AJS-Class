const getSentenceFragment = (offset = 0) => {
  const pageSize = 3
  const sentence = [...'hello world']
  return {
    data: sentence.slice(offset, offset + pageSize),
    nextPage: offset + pageSize < sentence.length ? offset + pageSize : null
  }
}

const getSentence = (sentence, offset) => {
  const pkg = getSentenceFragment(offset)
  sentence.push(pkg.data.join(''))
  if (pkg.nextPage === null) {
    return sentence
  } else {
    return getSentence(sentence, pkg.nextPage)
  }
  // MODIFY CODE HERE ------------
}

console.log(getSentence([], 0).join(''))
