var a = "I love "
var b = "Javascript"
var word = "I started. learning javascript"
//var fname = window.prompt("What is your name? ")
c = a.concat(b)
//console.log(c)
//console.log("My name is " + fname)
//console.log(b.toUpperCase())
//console.log(a.trim())
//console.log(word.search("learn"))

var fruits = ["apple", "orange", "banana", "guava"]
//console.log(fruits)
//console.log(fruits[1])
fruits.pop()
//console.log(fruits)

// intiator
// condition/limiter
// increment
// for(initiator; condition; increment) {}

for(var i=0; i < fruits.length; i++) {
    //console.log("I love " + fruits[i])
}
console.log(fruits.join(" "))
console.log(word.split(" "))
console.log(word.split("."))

for(var i=1; i<=100; i++) {
    if(i%2 == 1) {
        continue
    }
    else {
        console.log(i)
    }
}
