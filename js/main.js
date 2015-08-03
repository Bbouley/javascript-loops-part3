// add scripts

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

function firstLoop(arr) {
  arr.forEach(function(student) {
    console.log(student.name);
  });
}

firstLoop(students);

function secondLoop(arr){
  arr.forEach(function(student){
    console.log(student.age);
  });
}

secondLoop(students);

function thirdLoop(arr){
  arr.forEach(function(student){
    console.log(student.name + ', ' + student.city);
  });
}

thirdLoop(students);

function fourthLoop(arr){
  arr.forEach(function(student){
    if (student.city === 'Boulder'){
      console.log(student.name + ' is from ' + student.city);
    }
  });
}

fourthLoop(students);

function fifthLoop(arr){
  arr.forEach(function(student){
    if (student.age > 25){
      console.log(student.name + ' is older than 25');
    }
  });
}

fifthLoop(students);
