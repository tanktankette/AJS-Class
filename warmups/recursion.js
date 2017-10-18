const getSentenceFragment = (offset = 0) => {
  const pageSize = 3
  const sentence = [...'hello world']
  return {
    data: sentence.slice(offset, offset + pageSize),
    nextPage: offset + pageSize < sentence.length ? offset + pageSize : null
  }
}

const getSentence = (sentence, offset) => {
  const package = getSentenceFragment(offset)
  sentence.push(package.data.join(''))
  if (package.nextPage === null) {
    return sentence;
  } else {
    return getSentence(sentence, package.nextPage)
  }
  // MODIFY CODE HERE ------------
}

console.log(getSentence([], 0).join(''))