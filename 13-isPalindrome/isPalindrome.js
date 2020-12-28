function isPalindrome(word) {
  // Insert code here;
  
  let check = (word.length)/2;// create a variable and take the words length and divid by 2
  
  for(let i = 0; i < check; i++){// loop to see if the word matches 
      if(word[i] != word[word.length-1-i]){
          return false;
      }
  }return true;
}

// Do not edit this line;
module.exports = isPalindrome;