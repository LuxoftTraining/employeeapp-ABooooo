function average () {
    var args = Array.from(arguments);
    var sum = args.reduce((x,y) => x + y, 0);
    var length = args.length

    var average = sum / length;

    return average;
}

/***************************************************/

m = [1,2,3];
function average2 () {
    return average.apply(null, m);
}

/***************************************************/

function makeShout() { 
    var phrase = "Hello!"; 
    var shout = function() { 
        console.log(phrase); 
    } 
    phrase = "Done!" 
    return shout;
} 
shout = makeShout(); 
// what will it return? 
shout();

/***************************************************/

//sum(2)(2); //4 
//var plus1 = sum(1); 
//plus1(3); // 4 
var plus1 = sum(1);
function sum(num1) {
  return function plus1(num2) {
        return num1 + num2;
  };
}

console.log(sum(2)(2));
console.log(plus1(3));

/***************************************************/

function makeProperty(o, name, predicate) { 
    var value; 
    o["get" + name] = function() { return value; }; 
 
    o["set" + name] = function(v) { 
        if (predicate && !predicate(v)) 
            throw "set" + name + ": invalid value " + v; 
        else 
            value = v; 
    }; 
}

var o = {}; 
makeProperty(o, "Name", function(x) { 
    return typeof x == "string"; 
}); 
o.setName("Frank"); 
console.log(o.getName()); 
//o.setName(0); // cannot work string is the type

/***************************************************/

function info(o){
    return o;
}

info({name: "John", age: 20}, (p,v)=>console.log(v+";")); // ???
