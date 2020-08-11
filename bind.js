const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin' ,
    salary: 15000,
    getFullname: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount) {
        console.log(this);
        this.salary = this.salary - amount;
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

const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
heroChargeBill(2000);
heroChargeBill(3000);
console.log(heroPerson.salary);

const friendlyChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
friendlyChargeBill(1500);

normalPerson.chargeBill(

);