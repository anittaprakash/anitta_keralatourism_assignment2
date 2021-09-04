

function checkblankf(){

    var username=document.getElementById('username');
    var phoneNo = document.getElementById('txtPhoneNo');
    var email=document.getElementById('email');
    var password=document.getElementById('password');
    var cpassword=document.getElementById('cpassword');
    

    if(username.value == "" || username.value == null ){
        alert("Please enter your user Name.");
        return false;
    }else if(phoneNo.value == "" || phoneNo.value == null){
            alert("Please enter your Mobile no");
            return false;
    }else if(email.value == "" || email.value == null ){
            alert("Please enter your Email");
            return false;
    }else if(password.value == "" || password.value == null ){
            alert("Please enter your Password");
            return false;
    }else if(cpassword.value == "" || cpassword.value == null ){
            alert("Please enter your Conform Password");
            return false;
    }
}

function checkblankfl(){
    
    var email=document.getElementById('email');
    var password=document.getElementById('password');
    if(email.value == "" || email.value == null ){
        alert("Please enter your Email");
        return false;
    }else if(password.value == "" || password.value == null ){
        alert("Please enter your Password");
        return false;
    }
}