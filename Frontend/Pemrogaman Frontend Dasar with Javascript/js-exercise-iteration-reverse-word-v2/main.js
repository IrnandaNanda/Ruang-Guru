function reverseUnique(word) {
  let reverse = '';
  let lastchart = ''

  for(let i = word.length -1; i>=0; i--) {
    // if (lastchart !== word[i]) {
    //   reverse += word[i]
    //   lastchart = word[i]
    // }
    reverse += word[i]
  }
  return reverse
}

console.log(reverseUnique('greating')); //gnitaerg
console.log(reverseUnique('learning')); //gninrael
console.log(reverseUnique('book')); // kob
console.log(reverseUnique('RuangGuru')); //uruGnauR
console.log(reverseUnique('I am reading a book how to hunt a deer')); // red a tnuh ot woh kob a gnidaer ma I

module.exports = reverseUnique;
