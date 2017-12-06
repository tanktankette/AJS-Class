const getSentenceFragment = (offset = 0) => {
  const pageSize = 3
  const sentence = [...'hello world']
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        data: sentence.slice(offset, offset + pageSize),
        nextPage: offset + pageSize < sentence.length ? offset + pageSize : null
      })
    }, 100)
  })
}

const getSentence = async (sentence, offset) => {
  const pkg = await getSentenceFragment(offset)
  sentence.push(pkg.data.join(''))
  if (pkg.nextPage === null) {
    return sentence
  } else {
    return getSentence(sentence, pkg.nextPage)
  }
}

const getSentence2 = async () => {
  let pkg = await getSentenceFragment()
  let sentence = pkg.data.join('')
  while (pkg.nextPage) {
    let offset = pkg.nextPage
    pkg = await getSentenceFragment(offset)
    sentence += pkg.data.join('')
  }
  return sentence
}

getSentence([], 0)
  .then((sentence) => console.log(sentence.join('')))

getSentence2()
  .then(console.log)
