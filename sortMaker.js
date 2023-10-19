function sortMaker(ar){
if(ar[0]<0 || ar[1]<0)
return "!!! plz enter a positive value !!!";
else if(ar[0]==ar[1])
return "equal";
else
return ar.sort(function(a,b){return b-a});
}
console.log(sortMaker([1,9]));