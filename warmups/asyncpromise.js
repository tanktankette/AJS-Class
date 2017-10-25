const getSentenceFragment = (offset = 0) => {
  const pageSize = 3
  const sentence = [...'hello world']
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: sentence.slice(offset, offset + pageSize),
        nextPage: offset + pageSize < sentence.length ? offset + pageSize : null
      })
    }, 1000)
  })
}

const getSentence = (sentence, offset) => {
  return getSentenceFragment(offset)
    .then((pkg) => {
      sentence.push(pkg.data.join(''))
      if (pkg.nextPage) {
        return getSentence(sentence, pkg.nextPage)
      } else {
        return sentence
      }
    })
}

getSentence([], 0)
  .then((sentence) => console.log(sentence.join('')))
