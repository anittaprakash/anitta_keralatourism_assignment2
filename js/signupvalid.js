

function isNumber(evt) {
  evt = (evt) ? evt : window.event;
  var charCode = (evt.which) ? evt.which : evt.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    alert("Please enter only Numbers.");
    return false;
  }
  return true;
}
// function isNumber(){
//   var phoneNo = document.getElementById('txtPhoneNo');
//   let number = /([0-9])+(\.\-)/;
//   if(number.test(phoneNo.value)){
//     return true;
//   }else{
//     alert("Please enter only Numbers.");
//     return false;
//   }


// }

function ValidateNo() {
       var phoneNo = document.getElementById('txtPhoneNo');


          if (phoneNo.value.length < 10 || phoneNo.value.length > 10) {
            errorphoneno.innerHTML="Mobile No. is not valid, Please Enter 10 Digit Mobile No.";
            errorphoneno.style.color="red";
          // alert("Mobile No. is not valid, Please Enter 10 Digit Mobile No.");
             return false;
          }else{
            errorphoneno.innerHTML="";
         
            return true;
          }
}



  

  let email=document.getElementById("email");
  let error=document.getElementById("error");
  function validemail()
  {
    let regexp=/^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-])+\.([A-Za-z]{2,3})+(.[a-z]{2,3})?$/;
    if(regexp.test(email.value)){
      error.innerHTML="";
      return true;
    }else{
      error.innerHTML="must be (name)@(domain).(extension)(.extention)";
      error.style.color="red";
      return false;
    }
  }


    function checkPasswordStrength() {
        var number = /([0-9])/;
        var alphabets = /([a-zA-Z])/;
        var special_characters = /([~,!,@,#,$,%,^,&,*,-,_,+,=,?,>,<])/;
        if ($('#password').val().length < 9) {
            $('#password-strength-status').removeClass();
            $('#password-strength-status').addClass('weak-password');
            $('#password-strength-status').html("Weak (should be atleast 8 characters.)");
        } else {
            if ($('#password').val().match(number) && $('#password').val().match(alphabets) && $('#password').val().match(special_characters)) {
                $('#password-strength-status').removeClass();
                $('#password-strength-status').addClass('strong-password');
                $('#password-strength-status').html("Strong");
            } else {
                $('#password-strength-status').removeClass();
                $('#password-strength-status').addClass('medium-password');
                $('#password-strength-status').html("Medium (should include alphabets, numbers and special characters.)");
            }
        }
    }

  
  
    