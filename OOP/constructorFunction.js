function Person(firstName, lastName) {
  //Sebagai blueprint / prototype / cetakan
  this.firstName = firstName;
  this.lastName = lastName;
  this.sayHello = function (name) {
    console.info(`Hello ${name}, my name is ${this.firstName}`)
  }
}


// const kaisar = new Person();
// kaisar.firstName = 'Kaisar Firjatullah'
// kaisar.lastName = 'Sani Setyawan'
// kaisar.sayHello('Khansa')

// const budi = new Person();
// budi.firstName = 'Budi'
// budi.lastName = 'Sumargo'
// budi.sayHello('Joko')

const joni = new Person('joni', 'yespapa');
joni.sayHello('Bambang')

console.log(joni);