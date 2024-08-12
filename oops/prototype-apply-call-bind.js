// call, apply & bind

// using objects


// call also called as function borrowing
let name = {
       firstName  : "Shivalal",
       lastName  : "Prasad",
       fullName : function (firstName,lastName) {;
              console.log(`this is the function in side the object \n ${this.firstName} ${this.lastName}`);
       }
}

let name2 ={
       firstName  : "Prasad",
       lastName  : "Shivalal"
}

let details = function (city,state,country) {
       console.log(`${this.firstName} ${this.lastName}  ${city} ${state} ${country}`);


}
name.fullName()
name.fullName.call(name2)

details.call(name,"Kamareddy","Telangana","India")


// apply
console.log(`apply the this`);

details.apply(name2,["Kamareddy","Telangana","India"])

// bind

let printFullName = name.fullName.bind(name2)

let printFullName2 = details.bind(name,"Kamareddy","Telangana","India")

console.log(`binding the this`);
printFullName()
console.log(`binding the this`);
printFullName2()

