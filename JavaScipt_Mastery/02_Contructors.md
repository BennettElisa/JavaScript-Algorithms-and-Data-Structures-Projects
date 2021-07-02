// Factory function
// when object is returned within the function
function createCircle(radius) {
return {
radius,
draw: function () {
console.log("draw");
}
};
}

const newCircle = createCircle(5);

// Constructor Function --> first letter is capatalized
// when object is created with "new" keyword and return implicitly
// Pros & Cons --> Developers coming from C# like the new keyword because it
// looks like we are creating a new instance although JavaScript doesn't have classes
// Other developers like factory functions because if the "new" key word is forgotten
// because "this" will point to the global object in this case the window object

function Circle(radius) {
this.radius = radius;
this.draw = function () {
console.log("Draw");
};
}

const anotherCircle = new Circle(10);
