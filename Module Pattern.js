//Module Pattern Implementaion can be done through the following steps.

// Step 1 Inital IIFE Implementation, It creates a new scope.
(function() {
    //....code goes here
})();

//Step 2 Making a global variable to access the code. 
var ModuleDesign = (function() {
    //....code goes here
})();

//Step 3 Making some Private methods inside the IIFE block.

// (later I will use the underscore notation for the private methods or objects i.e. _private )
var ModuleDesign = (function() {
    //....This is my first Private method.
    // It is locally created inside the new scope of the IIFE block. 
    // It won't be accessible outside the "ModuleDesign" module.
    var firstPrivateMethod = function() {
        console.log("Private Method!");
    }
})();

//step 4 Adding the 'return' block in the code.

// return Statment will return an object to the module namespace.
// here it will return an object with "firstPublicMethod" as its property to the module with namespace "ModuleDesign"
// We can fetch the "firstPublicMethod" same as we do for object literals i.e, 
// ModuleDesign.firstPublicMethod();
var ModuleDesign = (function() {
    //....This is my first Private method.
    var firstPrivateMethod = function() {
            console.log("Private Method!");
        }
        //....This is the return block which will expose
        // only those methods to outside world which are metioned here!.
    return {
        firstPublicMethod: function() {
            console.log("Public Method!");
        }
    }
})();
