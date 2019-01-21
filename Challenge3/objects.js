// Using only JS, take an object with various properties.  Then create a new object that switches the keys and values.
// Example:
// Input:
// originalObject = {
//  age: 19,
//  name: 'Luke Skywalker',
//  eyeColor: 'blue',
//  isJedi: true
// };
// Output:
// newObject = {
//  19: 'age',
//  'Luke Skywalker': 'name',
//  blue: 'eyeColor',
//  true: 'isJedi'
// };

let starWars = {
     age: 19,
     name: 'Luke Skywalker',
     eyeColor: 'blue',
     isJedi: true
    };

var newObject = Object.keys(starWars).reduce(function(value,key){value[ starWars[key] ] = key;
return value; 
},{});
  console.log(newObject);

