let userArray = JSON.parse(localStorage.getItem("userSignup"))||[];
let email = document.getElementById("email");
let password = document.getElementById("password");
let loginBtn = document.getElementById("loginBtn");
let validEmail = document.querySelector("#loginContainer>div:nth-child(4)");
let validPassword = document.querySelector("#loginContainer>div:nth-child(6)");
let invalidCred = document.querySelector("#loginContainer>div:nth-child(2)");
console.log(userArray);

loginBtn.addEventListener("click" , function(){
      flag = false;
    for(let i = 0; i < userArray.length; i++){
        if(userArray[i].email === email.value && userArray[i].password === password.value){
            flag = true;
            break;
        }

   }

   if(flag){
       window.location.href = "homePage.html";
   }else {

    if(email.value == "" || password.value == ""){  
        invalidCred.style.display = "none";
       if(email.value == ""){
            validEmail.style.display = "block";
       }else {
        validEmail.style.display = "none";
         }

       if(password.value == ""){
           validPassword.style.display = "block";
       }else {
           validPassword.style.display = "none";
          }
     }else {
        invalidCred.style.display = "block";
        validEmail.style.display = "none";
        validPassword.styel.display = "none";
     }

   }
})
