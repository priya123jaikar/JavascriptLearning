//////////////////////////////////////////functions///////////////////////////////////////////

function sum(a,b){
    return a+b;
}
console.log(sum(1,3))




/////////////////////////////////////Objects/////////////////////////////////////////////////

function abc(first , last , dob){
    this.first = first;
    this.last = last;
    this.dob = dob;
}

const abc1 = new abc('John' , 'Deo' , 24)
console.log(abc1)



///////////////////////////////////class and constructor///////////////////////////////////////////////////

class person{
    constructor(firstName,lastName,dob){
        this.firstName=firstName;
        this.lastName=lastName;
        this.dob=dob;
    }
    
    getBirthday(){
        return this.dob.getFullYear();
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`
    }
}

const person1 = new person("Neal" , "Thelma" , 23)
console.log(person1.getFullName())


