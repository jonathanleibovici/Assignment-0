function frequencyCounter(word) {
  // Insert code here;
  var frequency = {};//an empty set
    for (var i=0; i<word.length;i++) {//loop the word
        var character = word.charAt(i);//returns a string 
        if (frequency[character]) {//if that word chrt count it
          frequency[character]++;
        } else {//give it 1 count
          frequency[character] = 1;
        }
    }

    return frequency
}

// Do not edit this line;
module.exports = frequencyCounter;