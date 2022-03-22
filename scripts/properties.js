var myobject = {
    // An ordinary data property
    x: 0,
    // An accessor property defined as a pair of functions
    get data () { return this.x; },
    set data (value) { this.x = value; }
  };
  myobject.data = 100;
        console.log(myobject.data);
        var o = {}; // Start with no properties at all
// Add a non enumerable data property x with value 1.
Object.defineProperty(o, "x", {
    value: 1,
    writable: true,
    enumerable: false,
    configurable: true
});
//
var p = Object.defineProperties({}, {
    x: { value: 1, writable: true, enumerable: true, configurable: true },
    y: { value: 1, writable: true, enumerable: true, configurable: true },
    r: {
        get: function () { return Math.sqrt(this.x * this.x + this.y * this.y) },
        enumerable: true,
        configurable: true
    }
});
//In addition to a name and value, 
//properties have attributes that specify whether they can be
// written, enumerated, and configured.

// For authors of API libraries
//• It allows them to add methods to prototype objects and 
//    make them nonenumerable, like built -in methods.
//• It allows them to “lock down” their objects, defining properties that cannot be
//    changed or deleted.

//To set the attributes of a property,
// or to create a new property with the specified attributes,
//