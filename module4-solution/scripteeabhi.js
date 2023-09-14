// var x="3";
// if(5>x)
// {
//     console.log(x);

// };


// function a(){
//     return{
//         name:"abhi"
//     };
// }
// console.log(a())


// var company =new Object();
// company.name="Abhiram's estate";
// company.ceo=new Object();
// company.ceo.firstname="ADEPU";
// console.log(company.ceo["firstname"]);



// Creating object in simple way 
// var company={
//     name:"Tcs",
//     ceo:{
//         firstname:"Adepu",
//         lastname:"Abhiram"
//     },
//     "$networth": 2.3 
// };
// console.log(company.$networth);

// Arrays starts here

// var array=new Array();
// array[0]="Abhiram";
// array[1]=21;
// array[2]=function(name){
// console.log("Hello "+name);
// }
// array[3]={course:"HTML,CSS,JS"};
// array[2](array[0]);
// console.log(array[1]);
// console.log(array[3].course);


// Short hand array creation

// var names = ["Yaakov", "John", "Joe"];
// console.log(names);

// for (var i = 0; i < names.length; i++)
// {
//   console.log("Hello " + names[i]);
// }

// for(var i=0;i<names.length-1;i--){
//     console.log(names[i]);
// }

// names[100] = "Jim";
// for (var i = 0; i < names.length; i++) {
//   console.log("Hello " + names[i]);
// }

// var names2 = ["Yaakov", "John", "Joe"];

// var myObj = {
//   name: "Yaakov",
//   course: "HTML/CSS/JS",
//   platform: "Courera"
// };
// for (var prop in myObj) 
// {
//   console.log(prop + ": " + myObj[prop]);
// }

// for (var name in names2)
// {
//   console.log("Hello " + names2[name]);
// }

// names2.greeting = "Hi! every one of you vs code";

// for (var name in names2) 
// {
//   console.log("Hello " + names2[name]);
// }

(function (window){
  var byeSpeaker = {};
  var speakWord = "Good Bye";
  
  byeSpeaker.speak = function (names) {
    console.log(speakWord + " " + names);
  }
   
   window.byeSpeaker = byeSpeaker;
  })(window);


  (function (window) {  
    var helloSpeaker = {};
    var speakWord = "Hello";
    
    helloSpeaker.speak = function (names) {
      console.log(speakWord + " " + names);
    }
        window.helloSpeaker = helloSpeaker;
    })(window);


(function () {

    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    
    for (var i = 0; i < names.length; i++) 
    {
    
    var firstLetter = names[i].charAt(0).toLowerCase();

      if (firstLetter === 'j') 
      {
        byeSpeaker.speak(names[i]);
      
      } 
      else 
      {
        helloSpeaker.speak(names[i]);
        
      }
    }
    
    })();
































