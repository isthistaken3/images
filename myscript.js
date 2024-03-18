  function checkPassword() {
   var password = document.getElementById("passwordBox");
   var passwordText = password.value;
   if(passwordText == "love you andrewos") {
    return true;
   }
   alert("Access denied! Incorrect password!");
   return false;
   }
