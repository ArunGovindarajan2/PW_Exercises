
//String ex =1
let s = 'hello world'
let sa = s.split(" "); 
console.log(sa); 
console.log(sa[sa.length-1]) 
console.log((sa[sa.length-1]).length)
console.log("end of ex 1")

//ex =2
let p = "   fly me   to   the moon  "
let p1 = p.trim();
console.log(p1);
let p2 = p1.split(" ");
console.log(p2);
console.log(p2.length);
console.log((p2[p2.length-1]).length);
console.log('end of ex 2')

// ex 3

function isAnagram(word1, word2) 
{
  let wordA = word1.trim().toLowerCase();
  let wordB = word2.trim().toLowerCase();
  let wordA1 = wordA.split('').sort().join('');
  let wordB1 = wordB.split('').sort().join('');
  console.log(wordA1, wordB1);
  return wordA1 === wordB1
  
}
console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));