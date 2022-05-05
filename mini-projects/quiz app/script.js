// sections
let sections = ["card__2", "card__3", "card__4", "card__5", "last-screen"];


document.getElementById("submit1").addEventListener('click',()=>{
    sections.forEach(section => {
        document.getElementById(section).classList.remove('display');
    });
    document.getElementById(sections[0]).classList.add('display');
 });
 
document.getElementById("submit2").addEventListener('click',()=>{
    sections.forEach(section => {
        document.getElementById(section).classList.remove('display');
    });
    document.getElementById(sections[1]).classList.add('display');
 });
 
document.getElementById("submit3").addEventListener('click',()=>{
    sections.forEach(section => {
        document.getElementById(section).classList.remove('display');
    });
    document.getElementById(sections[2]).classList.add('display');
 });
 
document.getElementById("submit4").addEventListener('click',()=>{
    sections.forEach(section => {
        document.getElementById(section).classList.remove('display');
    });
    document.getElementById(sections[3]).classList.add('display');
 });


let score = 0;
document.getElementById("Q1_1").addEventListener('click',()=>{
    score++;
});

document.getElementById("Q2_4").addEventListener('click',()=>{
    score++;
});

document.getElementById("Q3_1").addEventListener('click',()=>{
    score++;
});

document.getElementById("Q4_3").addEventListener('click',()=>{
    score++;
});

document.getElementById("Q5_1").addEventListener('click',()=>{
    score++;
});


document.getElementById("submit5").addEventListener('click',()=>{
    sections.forEach(section => {
        document.getElementById(section).classList.remove('display');
    });
    document.getElementById("last-screen").classList.add('display');
    document.getElementById("card__1").style.display = "none";
    document.getElementById("score").innerText = score + " / 5";
 });

 document.getElementById("reset").addEventListener('click',()=>{
    sections.forEach(section => {
        document.getElementById(section).classList.remove('display');
    });
     document.getElementById("card__1").style.display="block";
     score = 0;
 })



