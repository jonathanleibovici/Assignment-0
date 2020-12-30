class MySolution {
  countDownSum(num) {
    if(num == 1){//base case 
      return 1;
    }
    else{
      return num + this.countDownSum(num-1);//then the num adds the next number and keeps calling untill it hits one
    }
  }
}
// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;