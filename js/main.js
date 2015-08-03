// add scripts

console.log("sanity check!");

var students = [
  {
   name: 'Derek',
   age: 25,
   city: 'Boulder'
  },
  {
   name: 'Liz',
   age: 28,
   city: 'Denver'
  },
  {
   name: 'Carl',
   age: 31,
   city: 'Boulder'
  },
  {
   name: 'Peter',
   age: 23,
   city: 'Boulder'
  },
  {
   name: 'Megan',
   age: 19,
   city: 'Denver'
  }
];

function secondLoop(arr){
  arr.forEach(function(student){
    console.log(student.age);
  });
}

secondLoop(students);

function thirdLoop(arr){
  arr.forEach(function(student){
    console.log(student.name + ', ' +student.city);
  });
}

thirdLoop(students);

function fourthLoop(arr){
  arr.forEach(function(student){

  });
}
