//AUGMENTATION in Module Pattern 

//Previously, I have shown how to dig deep in Module Pattern. We have created some good fancy modules!
//But there could be the scenario where I need to extend my module, or I can say 
// have to link an another module( which has some specific feature) 
//to the Parent module to extend its functionality.

// This could be thought as, We have a certain application with a main module.Now we want an another module 
// which will act as an extension to aur main module.

// In Module Pattern, we generally maintain the entire module in a single file (a drawback),But in a large
//codebase we maintain multiple files. So if that is the case, then we can implement the
//  "Augmentating Modules" in our code.

// Augmentation has a flow which goes somewhat like this:
// First, we create a module using module pattern.
// Second, we import that module to another module.
// Third,(this is the core step of the process)here we add some new properties to that imported module.
// Final, we export it.


//... lets say, This is the core Module which I have used for revealing pattern.(First step)
var ModuleDesign = (function() {

    //....Private methods.
    var _firstPrivateMethod = function() {
        console.log("First Private Method!");
    }
    var _secondPrivateMethod = function() {
            console.log("Second Private Method!");
        }
        //....Public methods.
    var firstPublicMethod = function() {
        console.log("First Public Method!");
    }
    var secondPublicMethod = function() {
            // I can call any of the private methods inside the module's scope!
            // we can call the private methods via our public methods and on later stage, we can 
            // expose the public method in the return.
            _secondPrivateMethod();
            _firstPrivateMethod();
        }
        //....This is the return block which will expose
        // only those methods to outside world which are metioned here!.
    return {
        firstPublicMethod: firstPublicMethod,
        secondPublicMethod: secondPublicMethod
    }
})();


//... Now, This module is an another module which I will call
// as an "extension" for the core module.(Second Step)
var extensionModule = (function() {

})();
//injecting the core module "ModuleDesign" into it.(Importing done!)
var extensionModule = (function(ModuleDesign) {

})(ModuleDesign);
//adding some new functionality(through methods) to the core module using the extended approach.
var extensionModule = (function(ModuleDesign) {
    ModuleDesign.firstExtensionMethod = function() {
        console.log("This is from extension module!");
    }

})(ModuleDesign);

//adding the return block to finalise the export.
var extensionModule = (function(ModuleDesign) {
    ModuleDesign.firstExtensionMethod = function() {
        console.log("This is from extension module!");
    }

    return ModuleDesign;
})(ModuleDesign);


// TEST
// if we console.log(ModuleDesign) we get all the methods including the method from the "extensionModule"!
//......    firstExtensionMethod: ƒ()
//......    firstPublicMethod: ƒ()
//......    secondPublicMethod: ƒ()
//......    __proto__: Object
