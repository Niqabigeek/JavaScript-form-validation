

function register() {
    // Get the form id
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let email = document.getElementById("email").value;
    let country = document.getElementById("country").value;
    let gender = document.getElementById("gender").value;
    let password = document.getElementById("password").value;

    if(email === "") {
        alert("please input email")


    }else if(password === ""){
        alert("please input password")

    }else if(email === "" || password === "") {

        alert("please input email and password")

    }else{
        const userData = {
            firstname: firstname,
            lastname: lastname,
            email: email,
            country: country,
            gender: gender,
            password: password
        }
            
        localStorage.setItem("userData", JSON.stringify(userData)) // stringify the new array created then saving it to the local storage with a key named local_storage_data 
        window.location.href = "login.html"
    }




}; 
submit();


            
     

