//IIFE CONTSTRUCT
 (function(){
    // to create an elements -h1 , we can use an in build objects call, named as 'getElementId'
    // var x = getElementId('heading');

    var head = document.getElementById('heading');

     console.log(head);
     var par = document.getElementsByClassName('test');
     console.log(par);
     var quary  = document.querySelector('#heading');
     console.log(quary);


     /*
     window = {
         document = {
             getElementById: function(){

            },
            getElementByClassName: fuction() {

            }
        }
     }

     */



 })();





