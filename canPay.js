function canPay(ar,chipPrice){
if(ar.length == 0)
return "plz recharge your pocket";   
let sum=0;
for(const i of ar)
sum+=i;
if(sum>=chipPrice)return true;
return false;
}
console.log(canPay([1,5,5],12));
