const normalPerson = {
    firstName: 'Rahim',
    lastName: 'Uddin' ,
    salary: 15000,
    getFullname: function(){
        console.log(this.firstName, this.lastName);
    },
    chargeBill: function(amount) {
        this.salary = this.salary - amount;
        return this.salary;
        
    }
    
}

normalPerson.chargeBill(150);
normalPerson.chargeBill(3000);
console.log(normalPerson.salary);