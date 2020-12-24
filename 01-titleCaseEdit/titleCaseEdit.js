function titleCaseEdit(title) {
  // Insert code here;
  let str = title.split(" ");//split coverts it to an array 
  for(let i = 0;i < str.length; i++){
    str[i] = str[i][0].toUpperCase() + str[i].substr(1) //substr appends the rest of the elemt to the first letter that was capitlazed
  }
  let str1 = str.join(" ");//join covertes the array it into a string with the spaces 
  return str1;
}

// Do not edit this line;
module.exports = titleCaseEdit;