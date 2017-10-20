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
  const package = await getSentenceFragment(offset)
  sentence.push(package.data.join(''))
  if (package.nextPage === null) {
    return sentence;
  } else {
    return getSentence(sentence, package.nextPage)
  }
}

const getSentence2 = async () => {
  let package = await getSentenceFragment()
  sentence = package.data.join("")
  while(package.nextPage){
    let offset = package.nextPage
    package = await getSentenceFragment(offset)
    sentence += package.data.join("")
  }
  return sentence
}

getSentence([], 0)
.then((sentence) => console.log(sentence.join("")))

getSentence2()
.then(console.log)