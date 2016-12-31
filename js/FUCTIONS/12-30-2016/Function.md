FUNCTIONS
functions are totally different from other data types including objects.
functions are used to perform some logic and then result out/return the result of that logic
the result can be any primitive data type or objects 
 
    sytax:
    fuction <name of the function>(){
        return <results>;
    }
    
    
    
    example:
    
    function addition(){
    //create a variable a and initialize it to 1
    var a = 1;
    
    // create a another variable b and initialize it ( a + 1)
    var b = a + 1;
    return b;
    
    
    }
   
functions allow us to create temporary variable inside them. This means those variable live only inside that functions


functions are two types 

1.Named functions 
2.Anonymous functions 

Named functions 
These will have a name associated to them 

    syntax:
    
    functions <nameOfFunction>(){
        return <result>;
    }
    
    
*** In named functions we  MUST RETURN something 

Anonymous functions 
These does not have any name reference 

    example:
    
    var x = fuctions(){
        var y = 100;
        return y;
    }
    
**** In anonymous functions we MAY OR MAY NOT RETURN something 
**** anonymous functions are also called as CALLBACK FUNCTIONS
    
    
SCOPE OF VARIABLE IN JS
    
This is simply means life of the variable 
**if variable is created inside the functions or object then the scope of the variable is within the function or objects 
it is called as LOCAL VARIABLE

**if a variable is created outside functions or object then the scope of the variable is within that entire JS FILE 
it is called as GLOBAL VARIABLE


****since life of the global variable is throughout the life of the app. JS does not know the how much memory allocate 
 the global variable so WE ALWAYS AVOID THE GLOBAL VARIABLE ***
 
 

IIFE CONSTRUCT 

Immediately-invoke Function Expression

These are used to avoid leak from global variable 


    syntax:
    (fuctions()){
    
    
    
    }();
     
     
     
     
*** we always have IIFE Constructer in your JS. even if its only one line , write it inside the IIFE construct 
     
*** always have ONLY ONE IIFE construct pet js file no need take multiple file in one js file 
***** in IIFE construct we are using two ()();

first () is defining the function 
second () is calling the function
 
    
    
    
    
    

