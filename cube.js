function cubeNumber(num){
    if( typeof num !== "number")
    return "input is not a number\nplz enter a valid input";
    else
    return num*num*num;
}
console.log (cubeNumber("4"));