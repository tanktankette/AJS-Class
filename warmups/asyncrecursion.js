const getSentenceFragment = (offset, callback) => {
  const pageSize = 3
  const sentence = [...'hello world']
  setTimeout(() => callback({
    data: sentence.slice(offset, offset + pageSize),
    nextPage: offset +
        pageSize < sentence.length ? offset + pageSize : undefined
  }), 500)
}

const getSentence = (offset, callback) => {
  getSentenceFragment(offset, (pkg) => {
    let sentence = [pkg.data.join('')]

    if (pkg.nextPage === undefined) {
      return callback(sentence)
    } else {
      getSentence(pkg.nextPage, (fragment) => {
        return callback(sentence + fragment)
      })
    }
  })
}

getSentence(0, (sentence) => console.log(sentence))
