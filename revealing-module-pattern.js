// Revealing Module Pattern Implementaion can be done in the similar way as we did for Module pattern.

// The catch here is, we keep all the methods and variable PRIVATE 
//unless we explicitly expose any of them to the outside world. 

var revealingModuleDesign = (function() {

    //Previously I have mentioned that :
    //(later I will use the underscore notation specifically for the private methods or objects i.e. _private ) 
    // this convention will help us to distinguish between Private and Public methods/variable/objects.

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