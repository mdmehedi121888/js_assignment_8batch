function matchFinder(s,st){
    if(typeof s != "string" || typeof st != "string")
    return "invalide input\nplz enter a string";
    else if(s.includes(st))
    return true;
    else 
    return false;
}
console.log(matchFinder("hello","lli"));