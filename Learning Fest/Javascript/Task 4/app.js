function validate(){
    let email = document.getElementById("email");
    let password1 = document.getElementById("password1");
    let password2 = document.getElementById("password2");

    if(email.value=="" || password1.value==""){
      alert("Please Enter Email and Password");
      return false;
    }
    else if(password1.value != password2.value){
      alert("Passwords do not match");
      return false;
    }
    else{
      return true;
    }
}
