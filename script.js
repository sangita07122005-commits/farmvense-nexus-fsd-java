document.getElementById("loginForm").addEventListener("submit", function(e){

    e.preventDefault();

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;


    if(email === "" || password === ""){

        alert("Please fill all fields");

    }

    else{

        alert("Login Successful!");

    }

});