const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin' ,
    salary: 15000,
    getFullname: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount, tips, tax) {
        console.log(this);
        this.salary = this.salary - amount - tips -tax;
        return this.salary;
        
    }
    
}

const heroPerson = {
    firstName: 'Hero',
    lastName: 'Alam',
    salary: 25000
}

const friendlyPerson = {
    firstName: 'Hero',
    lastName: 'Balam',
    salary: 50000
}
//normalPerson.chargeBill();

// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
// heroChargeBill(2000);
// heroChargeBill(3000);
// console.log(heroPerson.salary);

// const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
// friendlyChargeBill(1500);

// normalPerson.chargeBill(
    
// );

//call::::

// normalPerson.chargeBill.call(heroPerson, 900, 100, 10);
// normalPerson.chargeBill.call(heroPerson, 3000, 300, 30);
// console.log(heroPerson.salary);

// normalPerson.chargeBill.call(friendlyPerson,5000, 500,50);
// console.log(friendlyPerson.salary);
// console.log(normalPerson.salary);

//apply:::::::

normalPerson.chargeBill.apply(heroPerson, [5000,500,50,]);
console.log(heroPerson.salary);