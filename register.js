function showPassword(id){

    let password = document.getElementById(id);


    if(password.type === "password"){

        password.type = "text";

    }

    else{

        password.type = "password";

    }

}



document.getElementById("registerForm").addEventListener("submit", function(e){

    e.preventDefault();


    let password = document.getElementById("password").value;

    let confirmPassword = document.getElementById("confirmPassword").value;


    if(password !== confirmPassword){

        alert("Password does not match!");

    }

    else{

        alert("Registration Successful!");

    }

});