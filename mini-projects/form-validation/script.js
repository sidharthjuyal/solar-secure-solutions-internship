const username = document.getElementById('i1');
const email = document.getElementById('i2');
const password = document.getElementById('i3');
const confirm = document.getElementById('i4');

let errors = ['error1', 'error2', 'error3', 'error4'];

const send = document.getElementById('send');

send.addEventListener('click', () => {

    /* confirm username */
    if (username.value.length < 8) {
        username.classList.add("marginSet");
        document.getElementById(errors[0]).classList.add("display");
        username.value = "";
    }
    else {
        username.classList.remove("marginSet");
        document.getElementById(errors[0]).classList.remove("display");
    }


    /* confirm email */
    let count1 = 0;
    let count2 = 0;
    for (let i = 0; i < email.value.length; i++) {
        if (email.value[i] == "@")
            count1++;
        if (email.value[i] == ".")
            count2++;
    }
    if (count1 <= 0 || count2 <= 0) {
        email.classList.add("marginSet");
        document.getElementById(errors[1]).classList.add("display");
        email.value = "";
    }
    else {
        email.classList.remove("marginSet");
        document.getElementById(errors[1]).classList.remove("display");
    }


    /* confirm password */
    if (password.value.length < 8) {
        password.classList.add("marginSet");
        document.getElementById(errors[2]).classList.add("display");
        password.value = "";
    }
    let passwordArray= [0,0,0];
    for(let i=0; i<password.value.length; i++)
    {
        if(password.value[i]>="A" && password.value[i]<="Z")
           passwordArray[0]++;
        if(password.value[i]>="0" && password.value[i]<="9")
           passwordArray[1]++;
        if(password.value[i]>="!" && password.value[i]<="/"     
        || password.value[i]>=":" && password.value[i]<="?" || password.value[i]=="@" || password.value[i]>="[" && password.value[i]<="`" || password.value[i]>="{" && password.value[i]<="~" )
           passwordArray[2]++;
    }
    let count=0;
    for(let i=0; i<3;i++)
    {
        if(passwordArray[i]==0)
        {
            count++;
        }
    }
    if(count>0)
    {
        password.classList.add("marginSet");
        document.getElementById(errors[2]).classList.add("display");
        password.value = ""; 
    }
    else {
        password.classList.remove("marginSet");
        document.getElementById(errors[2]).classList.remove("display");
    }


    /* confirm password */
    if (confirm.value != password.value || confirm.value == "") {
        confirm.classList.add("marginSet");
        confirm.value = "";
        document.getElementById(errors[3]).classList.add("display");
    }
    else {
        confirm.classList.remove("marginSet");
        document.getElementById(errors[3]).classList.remove("display");
    }    
});

