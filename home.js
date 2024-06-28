

for(var i=0; i<=15; i++) {
    if(i%2 === 0) {
        document.querySelector('#num').innerHTML += i+ " is even<br>";
    }
    else {
       document.querySelector('#num').innerHTML += i+ " is odd<br>";
    }
}
for(var i=1; i<=100; i++) {
    if(i%3 === 0) {
        document.querySelector('#int').innerHTML +=  "Fizz<br>";
    }
    else if(i%5 === 0) {
        document.querySelector('#int').innerHTML += "buzz<br>";
    }
    else if(i%3 === 0 && i%5 ===0) {
        document.querySelector('#int').innerHTML += "Fizzbuzz<br>";
    }
    
    }
    for(var i=100; i<=999; i++) {
        str = i.toString()
        sum = (Number (str[0]**3)) + (Number (str[1]**3)) + (Number (str[2]**3))
        if (sum== i) {
            document.querySelector('#ast').innerHTML += i+ "is an Armstrong number<br>";
        }
            
        }

    