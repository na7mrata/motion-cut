document.getElementById('loginForm').addEventListener('submit',function(event){
    event.preventDefault();
    const name=document.getElementById('name').value;
    const email=document.getElementById('email').value;
    const password=document.getElementById('password').value;
    console.log(name,email,password);
   });
   function func() {
    var name=document.getElementById('name').value;
   var email =document.getElementById('email').value;
   var password =document.getElementById('password').value;
   if(name=='') {
    alert('Please enter your name');
   }
   else if(email=='' && email !=''+'@gmail.com') {
    alert('Please enter your email address');
   } 
   else if(password=='') {
    alert('Please enter your password');
   }
   else {
    alert('Login Successful');
    window.location.assign("index.html")
   }
}
  