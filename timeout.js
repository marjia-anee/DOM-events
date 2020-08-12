function doSomething() {
    console.log(3333);
}

console.log(2222);
setTimeout(doSomething, 5000) // time set kore deya hoise
console.log(4444);
console.log(4444);
console.log(4444);
setTimeout(function() {
    console.log('lazy and waiting')
}, 4000)

setTimeout(() => {   // alternative way
    console.log('see you later.') 

}, 4000)


setInterval(function() {
    console.log('doing it')
}, 3000); //control+c diye off korbo