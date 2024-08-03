// how we chane the object key value pairs to the parent/global variables

const user = {
  name: 'shivalal',
  age: 21,
  city: 'hyderabad'
};

const {name,age,city} = user;

console.log(`
console loging user values with destructuring
`);

// output
console.log(name);// shivalal
console.log(age);// 21
console.log(city);// hyderabad

// with nestes objects

const user01 = {
  name01: 'shivalal',
  age01: 21,
  city01: 'hyderabad',
  address01:{
    street:`JBS`,
    city:`HYD`,
    pincode:`500009`
   }
}



const {name01,age01,city01,address01:{street}} = user01;

console.log(`
console loging user01 values with destructuring in nested objects
`);

// output
console.log(name01);// shivalal
console.log(age01);// 21
console.log(city01);// hyderabad
console.log(street);// JBS

const user011 = {
  name011: 'shivalal',
  age011: 21,
  city011: 'hyderabad',
  address011:{
    street:{
        streetName:`JBS`,
        streetNumber:123
    },
    city:`HYD`,
    pincode:`500009`
   }
}



const {name011,age011,city011,address011:{street:{streetNumber}}} = user011;

console.log(`
console loging user01 values with destructuring in nested objects
`);

// output
console.log(name011);// shivalal
console.log(age011);// 21
console.log(city011);// hyderabad
console.log(streetNumber);// 123

// creating a new object with some default values

const defaultUser ={
    name111:`shivalal`,
    age:21,
    city:`hyderabad`
};

const {name111,age111,city111,type='developer'} = defaultUser;

// output
console.log(`
console loging default user
`);
console.log(name);// shivalal
console.log(age);// 21
console.log(city);// hyderabad
console.log(type);// developer}

// merging two objects with some conflicts in the keys with spread operator

const user1 ={
    name:`shivalal`,
    age:21,
    city:`hyderabad`
};

const user1Hobby ={
    hobby:`coding`,
    section:`web dev`,
    role:`SDE`,
    city:`mumbai`,
}
const mergedUser1 = {...user1,...user1Hobby};

// output
console.log(`
console loging merged user 1
`);
console.log(mergedUser1);
// {
//   name: 'shivalal',
//   age: 21,
//   city: 'mumbai',
//   hobby: 'coding',
//   section: 'web dev',
//   role: 'SDE'
// }

const mergedUser11 = {...user1Hobby,...user1};

// output
console.log(`
console loging merged user 11
`);
console.log(mergedUser11);
// {
//   name: 'shivalal',
//   age: 21,
//   city: 'hyderabad',
//   hobby: 'coding',
//   section: 'web dev',
//   role: 'SDE'
// }


// creating a object with other object and with some new keys

const user2 ={
    name:`shivalal`,
    age:21,
    city:`hyderabad`
};

const mergeduser2 ={
    hobby:`narrator`,
    section:`content writer`,
    role:`CEO`,
    city:`mumbai`,
    ...user2
}

// output
console.log(`
console loging merged user 2
`);
console.log(mergeduser2);
// {
//   name: 'shivalal',
//   age: 21,
//   city: 'hyderabad',
//   hobby: 'narrator',
//   section: 'content writer',
//   role: 'CEO'
// }


// combining two objects with rest operator

const rest ={
    name:`shivalal`,
    age:21,
    city1111:`hyderabad`,
}

const {city1111,...restWithoutcity} = rest;

// output
console.log(`
console loging rest user
`);
console.log(restWithoutcity);
console.log(city1111);
// {}




//// same with arrays will also work

 let subjects =[`firstLanguage`,`secondLanguage`,`thirdLanguaage`,`math`,`science`,`socialScience`]

 let [fl45,sl45,tl55,m45,s45,ss99] = subjects;
console.log(subjects);
console.log(fl45);
console.log(sl45);
console.log(tl55);
console.log(m45);
console.log(s45);
console.log(ss99);

let subject =[`firstLanguage`,`secondLanguage`,`thirdLanguaage`,`math`,`science`,`socialScience`]

 let [fl455,sl454,tl555,m445] = subject;
console.log(subject);
console.log(fl455);
console.log(sl454);
console.log(tl555);
console.log(m445);

const arr=[10,function f(x){},subject =[`firstLanguage`,`secondLanguage`,`thirdLanguaage`,`math`,`science`,`socialScience`],rest1 ={
name:`shivalal`,age:21,city1111:`hyderabad`},true,BigInt(123567890),null,undefined,NaN]

let [numberofarr,functionofarr,arrayofarr,objectofarr,booleanofarr,bigIntofarr,nullofarr,undefinedofarr,NaNofarr]=arr;

console.log(arr);
console.log(numberofarr);
console.log(functionofarr);
console.log(arrayofarr);
console.log(objectofarr);
console.log(booleanofarr);
console.log(bigIntofarr);
console.log(nullofarr);
console.log(undefinedofarr);
console.log(NaNofarr);

const arr1=[10,function f(x){}]

let mergedarr=[...arr1,`valuwwwww`, `crfvgtbhnjmkl`,...subject]
console.log(mergedarr);
