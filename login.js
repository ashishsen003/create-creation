let email = document.getElementById("email")
let password = document.getElementById("password")
let login = document.getElementById("login")
let wrong_email = document.getElementById("wrong-email")
let wrong_pass = document.getElementById("wrong-pass")
let userdata = JSON.parse(localStorage.getItem("userdetails")) || []

login.addEventListener("click",(e)=>{
    e.preventDefault()
    if(email.value == "" || password.value == ""){
        alert("Enter required details")
    } else {
    userdata.forEach(element => {
        if(element.Email != email.value && element.Password != password.value){
            wrong_email.style.display = "block"
            wrong_pass.style.display = "block"
            console.log("no")

        } else if(element.Email != email.value){
            wrong_email.style.display = "block"

        } else if(element.Password != password.value){
            wrong_pass.style.display = "block"
        } else {
            userdata.forEach((item)=>{
                if(item.Email == email.value){
                localStorage.setItem("user-name",JSON.stringify(item.firstName))

                }
            })
            window.location.href = "./index.html"
        }
    });
    setTimeout(()=>{
        wrong_email.style.display = "none"
        wrong_pass.style.display = "none"
    },5000)
}
})


