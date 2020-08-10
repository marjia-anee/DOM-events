 function evenify(num){
     var result;
    if (num % 2 == 0) {
        result = num;
    }
    else{
        result = num * 2;
    }
    return result;
}


var result = evenify(13);
var square = result* result;
console.log('square', square);

