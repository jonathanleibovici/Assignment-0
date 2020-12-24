function countOfAllBooleans(arr) {
  // Insert code here;
  let count = 0;//we need a count 
  for(let i =0 ;i<arr.length;i++){// loop the array 
    if(arr[i]===true||arr[i]===false){//javascript has truthy and falsy values so we only need true and false 
      //then return the count 
      count++
    }

  }
  return count
}

// Do not edit this line;
module.exports = countOfAllBooleans;