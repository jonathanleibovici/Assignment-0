function productOfAnyAmountOfNumbers(...args) {
  // Insert code here;
  let sum =1//you need the 1 
  for(let i =0;i<arguments.length;i++)
  {
 sum *=arguments[i]
} return sum
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;