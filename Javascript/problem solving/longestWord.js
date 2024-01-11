function longestWord(sen) {
  // match will remove punctuations will return ['fun' ,'time']
  console.log(sen.match(/[a-z]+/gi).sort((a, b) => b.length - a.length)[0]);
}

longestWord('"fun&!! time"');
