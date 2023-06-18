let user_name = JSON.parse(localStorage.getItem("user-name")) || "Login / Signup"

login.addEventListener("click",()=>{
    window.location.href = "./login.html"
})

window.addEventListener("load",()=>{
    login.innerText = user_name
})