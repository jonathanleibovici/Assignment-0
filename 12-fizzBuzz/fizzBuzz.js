function fizzBuzz(start, end) {
  // Insert code here;
  let index = 0//needed is at that index the number in the array goes into index 
  let arr = new Array()//need to create an array to return an array 
  for (var i=start; i <= end; i++){
    if((i) % 3 == 0 && (i) % 5 == 0) arr[index] = "FizzBuzz";
    else if (i % 3 == 0) arr[index] = "Fizz";
    else if (i % 5 == 0) arr[index] = "Buzz";
    else arr[index] = i;
    index++
} return arr

}
  


// Do not edit this line;
module.exports = fizzBuzz;
