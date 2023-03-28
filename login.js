function login() {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let getLocalData = JSON.parse(localStorage.getItem("userData")) || [];

    if (email === getLocalData.email && password === getLocalData.password) {
        alert("Hello! Welcome to your Dashboard. 😄")

        window.location.href = "dashboard.html"
    }else{
        alert("email or password not correct")
    }

}
