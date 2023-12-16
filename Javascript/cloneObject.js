// 1. Shallow Cloning:

// Shallow cloning creates a new object, but it only copies the properties of the original object's first level. If the original object contains nested objects or arrays, those nested objects are not cloned but are instead referenced in the new object.

// Using the Spread Operator:
const originalObject = {a: 1, b: 2, nested: {c: 3}};

// Shallow clone using the spread operator
const shallowClone = {...originalObject};

// Modify the clone
shallowClone.a = 99;
shallowClone.nested.c = 999; // This will also modify the originalObject

console.log(originalObject); // { a: 1, b: 2, nested: { c: 999 } }
console.log(shallowClone); // { a: 99, b: 2, nested: { c: 999 } }
// modifying the nested object in the clone also affects the original object.
////////////////////////////////////////////////////////////////

const originalObject2 = {a: 1, b: 2, nested: {c: 3}};

// Shallow clone using Object.assign
const shallowClone = Object.assign({}, originalObject2);

// Modify the clone
shallowClone.a = 99;
shallowClone.nested.c = 999; // This will also modify the originalObject

console.log(originalObject2); // { a: 1, b: 2, nested: { c: 999 } }
console.log(shallowClone); // { a: 99, b: 2, nested: { c: 999 } }
// modifying the nested object in the clone also affects the original object.
////////////////////////////////////////////////////////////////

// 2. Deep Cloning:

const originalObject3 = {a: 1, b: 2, nested: {c: 3}};

// Deep clone using JSON.stringify and JSON.parse
const deepClone = JSON.parse(JSON.stringify(originalObject3));

// Modify the clone
deepClone.a = 99;
deepClone.nested.c = 999; // This only affects the clone

console.log(originalObject3); // { a: 1, b: 2, nested: { c: 3 } }
console.log(deepClone); // { a: 99, b: 2, nested: { c: 999 } }
// modifying the nested object in the clone doesn't affect the original object.


// we can use _.cloneDeep from lodash to do the deepCloning directly
