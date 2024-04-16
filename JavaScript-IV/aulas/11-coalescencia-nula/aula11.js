//O operador de coalescência nula "??"

let a = 0; 
let b = a || 42;
//como "a" vale 0, e 0 é false, "a" é desconsiderado e b recebe 42. 
console.log({a, b}); // {a: 0, b: 42}

b = a ?? 42;
// caso "a" tivesse valor "null" ou "undefined", ele seria desconsiderado e "b" receberia 42.
console.log({a, b}) // {a: 0, b: 42}

let c = null ?? 42;
console.log({c}); // {c: 42}

let d = false ?? 42;
console.log({d}); //{d: false}