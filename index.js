 
const form=document.getElementById('form');
const username=document.getElementById('username');
const email=document.getElementById('email');
const password=document.getElementById('password');
const password2=document.getElementById('password2');

function isValidemail(email)
{
    const re=/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
          
}
function checksame(pass1,pass2)
{
    return pass1.value== pass2.value;
}
function isValidpass(password)
{
    return password.length>5;
    //sp char, number, length 5
    
    
}
function ulength(username)
{
    return username.length>3;
}
function showError(input,message)
{
    const formControl = input.parentElement;
    formControl.className='form-control error';
    const small=formControl.querySelector('small');
    small.innerText=message;
}
function showSuccess(input)
{
    const formControl = input.parentElement;
    formControl.className='form-control success';
}
form.addEventListener('submit', function(e){
    e.preventDefault();
    if(username.value===''){
        showError(username,'Username is required');

    }
    else if(!ulength(username.value))
    {
        showError(username,'Username length must be greater than 3');
    }
    else{
        showSuccess(username);
    }
    if(email.value===''){
        showError(email,'email is required');
    }
    else if(!isValidemail(email.value))
    {
        showError(email,'Email is not Vaild')
    }
    else{
        showSuccess(email);
    }
    if(password.value===''){
        showError(password,'Password is required');
    }
    else if(!isValidpass(password.value))
    {
        showError(password,'Password length must be greater than 5')
    }
    else{
        showSuccess(password);
    }
    if(password2.value===''){
        showError(password2,'Password is required');

    }
    else if(!checksame(password,password2))
    {
        showError(password2,"Not same as above")
    }
    else{
        showSuccess(password2);
    }
})