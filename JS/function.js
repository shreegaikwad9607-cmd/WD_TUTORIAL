//types of FUNCTIONS IN JAVASCRIPT
// 1.Named function
 function add(a,b){
    console.log(a+b)
 }
 add(5,7);


//  anonymous function 

/*function(c,d){
    console.log(c+d)

}
(5,7) */

//IIFE (Immediately Invoked Function Expression)
(function (e,f){
    console.log(e-f);
    
}
 (6,4))

 //fun with expression
let mul=function(A,G){
    console.log(A*G);   
}
mul(10,10)

// Arrow Function  ()=>

let square=((r,s)=>{
    console.log(r*s);

})
square(10,10)


//Nested Function
function grandparent(){
    console.log("I am Grand-Parent");
     
       function parent(){
        console.log(" I am a parent");
        function child(){
            console.log("I am a child");
            
        }
        return child
        
       }
       return parent
    
} grandparent() () ()