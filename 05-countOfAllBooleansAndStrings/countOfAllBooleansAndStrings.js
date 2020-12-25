function countOfAllBooleansAndStrings(arr) {
  // Insert code here;
  
  let count =0 //we need a count 
  
  for(let i =0 ;i<arr.length;i++){// loop the array 
    if(arr[i]===true||arr[i]===false||typeof arr[i] === "string"){//javascript has truthy and falsy values so we only need true and false 
      //then return the count // the typeof was adding another kind of check it was a string 
      count++
      
      
    }

  }
  return count
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;