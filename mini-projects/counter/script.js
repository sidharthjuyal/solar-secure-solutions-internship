let value=0;

const Increment = document.getElementById("increment");
const Decrement = document.getElementById("decrement");
const Nuetral = document.getElementById("nuetral");
const Number = document.getElementById("number");

Increment.addEventListener('click',()=>{
   ++value;
   Number.innerHTML=value;
});

Decrement.addEventListener('click',()=>{
   --value;
   Number.innerHTML=value;
});

Nuetral.addEventListener('click',()=>{
   value=0;
   Number.innerHTML=value;
});