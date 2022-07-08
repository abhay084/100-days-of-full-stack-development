const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const fullname=document.getElementById('fullname');
const phone=document.getElementById('phone');
const password1=document.getElementById('password1');
const password2=document.getElementById('password2');

form.addEventListener('submit',(e)=>
{
    e.preventDefault();

    checkInputs();
});

function checkInputs(){
    //get the values from the input
    const usernameValue=username.value.trim(); 
    const emailValue = email.value.trim();
    const fullnameValue=fullname.value.trim();
    const phoneValue= phone.value.trim();
    const passwd1Value= password1.value.trim();
    const passwd2Value=password2.value.trim();

    if(usernameValue==''){
        //show error 
    }
};
