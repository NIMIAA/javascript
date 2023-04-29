var header = document.getElementById('header')

header.innerHTML = 'head'

header.style.color = `green`

var button = document.getElementById('button')
    
function brain() {
    
    // window.alert('my function is working')
    // document.write('my function is working')
    // console.log('my function is working')

    if (button.style.backgroundColor == 'blue' && button.innerHTML == 'Login') {
        button.style.backgroundColor ='red'
        button.innerHTML ='Logout'
    } 
    else {
        button.style.backgroundColor = 'blue' 
        button.innerHTML = 'Login'
    }
}
// for(var count = 0; count < 50; count ++){
// console.log (count)
// }
const myArray =[]

myArray.unshift('items', 'item2', 'item3', 'dog', 'cat', 'apple')

console.log (myArray)
myArray.push('1', '2')
console.log (myArray)
myArray.pop()
console.log (myArray)


const car = {
    id:"tesla",
    model:"model X",
    color:"red"
    
}

console.log(car)
console.log(car.model)
console.log(car["id"])

const myDate = new Date()
console.log(myDate)
const date = document.getElementById('date')
date.innerText = new Date().toDateString()



