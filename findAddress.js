function findAddress(obj){
let s;
s=(obj.street!= undefined ? obj.street :"_");s+=',';
s+=(obj.house != undefined ? obj.house : "_");s+=',';
s+=(obj.society != undefined ? obj.society : "_");
return s;
}
const obj = {
    street:10,
    house:"15A",
    society:"Earth Perfect"
};
console.log(findAddress(obj));
