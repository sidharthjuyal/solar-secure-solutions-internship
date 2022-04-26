const Input = document.getElementById('calculation'); 
const Result = document.getElementById('result'); 
 
function reset()
{
   Input.value="";
}

function display(value)
{
   Input.value+=value;
}

Result.addEventListener('click',()=>{
   let answer = eval(Input.value); 
   Input.value=answer;
});