// var msg = "in global";
// console.log("scope = "+msg);

// var a = function() {
// 	var msg = "inside a";
// 	console.log("scope = "+msg);

// 	b();
// }

// function b () {
// 	console.log("scope = "+msg);
// 	var res = c();
// 	console.log("res = "+res)

// 	function c (x , y) {
// 		return x > y;
// 	}
// }

// a();

// // ***** String concatination
// var string = "Hello";
// string +=" World!";
// console.log(string);

// // ***** regular math operators
// console.log((5 + 4) / 3);
// console.log(undefined / 5);

// // ***** equality 
// var x=4, y=4;
// if (x == y) {
// 	console.log("equal");
// }

// x = '4';
// if (x == y) {//type coercion
// 	console.log("equal");
// }

// // ***** strict equality
// var x='4', y=4;
// if (x === y) {//type coercion
// 	console.log("equal");
// } else {
// 	console.log("not equal")
// }

// // ***** if statement (all false)
// if(false || null || undefined || "" || 0 || NaN) {
// 	console.log("this line wont execute");
// } else {
// 	console.log("all false")
// }

// // ***** if statement (all true)
// if(true && "hello" && 1 && -1 && "false") {
// 	console.log("All true");
// }


// // ***** Default value
// function display(msg) {
// 	msg = msg || "default...";
// 	console.log(msg);
// }

// display("Hi...");
// display();


// // ***** Object creation
// var person = new Object();
// person.firstName = "Donald"
// person.lastName = "trump";
// person.personalInfo = new Object();
// person.personalInfo.address = "New York City";
// person.personalInfo.mobile = "1234567890";
// var annualIncome = "Annual Income";
// person[annualIncome] = 1;

// console.log("USA Presdident Name is: "+person.firstName);
// console.log("USA Presdident Address is: "+person.personalInfo.address);
// console.log("USA Presdident Annual Income is: "+person[annualIncome]);

// // ***** better way: Object literal
// var personInfo = {
// 	firstName: "Donald",
// 	lastName: "Trump",
// 	personInfo: {
// 		address: "New York City",
// 		mobile: "1234567890"
// 	},
// 	"Annual Income": 1
// };

// console.log(personInfo)

// // ***** Functions
// function multiply(x, y) {
// 	return x * y;
// }

// multiply.version = "v.1.0.0";
// console.log(multiply.version);


// // ***** Function factory
// function makeMultiplier(multiplier) {
// 	var myFunc = function (x) {
// 		return multiplier * x;
// 	}

// 	return myFunc;
// }

// var multiplyBy3 = makeMultiplier(3);
// console.log(multiplyBy3(3));

// var doubleAll = makeMultiplier(2);
// console.log(doubleAll(2));


// // ***** Passing functions as parameter
// function doOperation(x, operation) {
// 	return operation(x);
// }

// console.log(doOperation(5, multiplyBy3));
// console.log(doOperation(50, doubleAll));

// // ***** functions constructors, prototype
// function Circle (radius) {
// 	this.radius = radius;
// }

// Circle.prototype.getArea = 
// 	function() {
// 		return Math.PI * Math.pow(this.radius, 2);
// 	};

// var myCircle = new Circle(10);
// console.log(myCircle.getArea());


// // Object literals and "this" keyword
// var literalCircle = {
// 	radius:10,
// 	getArea: function(){
// 		var self = this;
// 		var increaseRadius = function () {
// 			self.radius = 20;
// 		};
// 		increaseRadius();
// 		console.log(this.radius);

// 		return Math.PI * Math.pow(this.radius, 2);
// 	}
// };

// console.log(literalCircle.getArea());


// // ***** Arrays
// var array = new Array();
// array[0] = "Javascript";
// array[1] = 2;
// array[2] = function (name) {
// 	console.log("Hello "+name);
// };
// array[3] = {name: "Javascript"};

// console.log(array);
// array[2](array[0]);
// console.log(array[3].name);

// // Short hand array creation
// var names = ["HTML", "CSS", "JS"];
// names[5] = "Course";

// console.log(names);
// for (var i = 0; i < names.length; i++) {
// 	console.log(names[i]);
// }

// var names2 = ["HTML", "CSS", "JS"];
// names2.version = "v.1.0.0";
// for(var name in names2) {
// 	console.log("Hello "+names2[name]);
// }

// // For loop on object properties
// var myObj = {
// 	name: "Blog",
// 	course: "JS"
// };

// for(var prop in myObj) {
// 	console.log(prop + ": "+myObj[prop]);
// }














