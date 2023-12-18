//////////////////////////////////////////String methods/////////////////////////////////////////////

var speech = "Hello , Good Morning!"
console.log(speech)
console.log(speech.length)
console.log(speech.toUpperCase())
console.log(speech.toLowerCase())
console.log(speech.substring(0,5))
console.log(speech.split(''))
console.log(speech.split(' '))



//////////////////////////////////////////array////////////////////////////////////////////////////

const ar = [1,2,3,234,5456,5 , "hsj" , "priya" , "mango"]
console.log(ar)

ar[6] = "apple";
console.log(ar)

ar[9] = "grapes";
console.log(ar)

ar.push = "guava";
console.log(ar)

ar.pop();
console.log(ar)

//checking whether it is array or not

console.log(Array.isArray(ar))

//checking index

console.log(ar.indexOf('priya'))



///////////////////////////////////////////objects//////////////////////////////////////////////////

const person = {
    fname : "John",
    lname : "Deo",
    age: 24,
    hobbies: ['movies' , 'music' , 'sports'],
    address: {
        street : '123 main st',
        city : 'boston',
        state : 'A'
    }
}

console.log(person)
console.log(person.fname) //output : John
console.log(person.fname , person.lname) //output : John Deo
console.log(person.hobbies[0]) //output : movies
console.log(person.address.city) //output : boston 

//adding more fields to object

person.email = 'abc@gmail.com'
console.log(person)