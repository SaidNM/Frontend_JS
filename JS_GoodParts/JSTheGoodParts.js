/*
Objects
An object is a container of properties, each prop has its own property.name and its property value.
Object in JS are mutable keyed collections.
Numbers, Strings and Booleans are Object-liked, becuase they have methods that are inmmutable.

The following statements are Objects: arrays, functions, regular expressions, objects.

The Property Name = Always a String
The Property Value = Any JS value except for undefined

Objects are class-free.

Prototype Linked Feature = Function that allows an Object to inherit properties and methods from another object.

*/

//Example of a Literal Object 
var empty_object = {};

//Example of an Object with properties
var stooge = {
	"first-name":"Jhon"
	"last-name":"Smith"
}

//Retrieval
stooge["first-name"] == stooge.first-name; //true

//Update 
stooge.first-name = "Monica"; //Updates the property
stooge.age = 18 //Creates a new property an its added to stooge

//Reference 
//Objects are passed by reference, they are never copied. Just like a pointer in C-Languaje
var stooge2 = stooge;
stooge.first-name==stooge2.first-name; //true

//Filling default values with ||

var middle = stooge["middle-name"] || "none"; //stooge.middle-name doesnt exists, so var middle = "none"

//Prototype
//The prototype is an object tha calls the Prototype Linked Feature, this allow us to inherit mehots and properties from one object to other
//Object Literal inherits from Object.prototype that comes with JS..

//We can choose from which pbject are we going to inherit 
if (typeof Object.create !== 'function') {
	Object.create = function (o) {
		var F = function () {};
		F.prototype = o;
		return new F();
	};
}
//Si el objeto creado no es una funcion, actualizamos la propiedad .create de Object.
//Object.create es actualizado con una nueva funcion que recibe un objeto del cual heredaremos.
var another_stooge = Object.create(stooge);
//another_stooge has all the properties of stooge just like first-name, etc.