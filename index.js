let user_name = JSON.parse(localStorage.getItem("user-name")) || "Login / Signup"
let services = document.getElementById("services")

login.addEventListener("click",()=>{
    window.location.href = "./login.html"
})

window.addEventListener("load",()=>{
    login.innerText = user_name
})

services.addEventListener("click",()=>{
    window.location.href = "./services.html"
    console.log("hi")
})