// DOM METHODS[DOCUMENT OBJECT METHOD]
// _________________________________________________________________________________________

// 1. document.getElementById()

let c = document.getElementById("h11");
c.style.backgroundColor="purple";
c.style.color="white";
c.style.textAlign="center";


// _________________________________________________________________________________________
// 2. document.getElementsByClassName()

let a = document.getElementsByClassName("para");
for(let i=0; i<a.length; i++){
    a[0].style.color="lightblue";
    a[1].style.backgroundColor="pink";
    a[i].style.fontStyle="italic";
}
// _________________________________________________________________________________________
// 3. document.getElementsByTagName()
  let o = document.getElementsByTagName("span");
  for(let m=0; m<o.length ; m++)
    {
    o[0].style.color="pink";
     o[1].style.color="blue";
     o[2].style.color="brown";
     o[3].style.backgroundColor="orange"
  }

// _________________________________________________________________________________________
// 4.document.querySelector()

  firstspan=document.querySelector("span");
  firstspan.style.fontSize="100px"
// ________________________________________________________________________________
let alldiv=document.querySelectorAll("div[p]");
alldiv.style.fontSize="100px";


