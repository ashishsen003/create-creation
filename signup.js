let submit = document.getElementById("submit")
let login = document.getElementById("login")
let first_name = document.getElementById("first-name")
let last_name = document.getElementById("last-name")
let email = document.getElementById("email")
let password = document.getElementById("password")
let confirm_password = document.getElementById("confirm-password")
let wrong_pass = document.getElementById("wrong-pass")


let userdata = JSON.parse(localStorage.getItem("userdetails")) || []



submit.addEventListener("click",(e)=>{
    e.preventDefault()
    if(password.value != confirm_password.value){
        wrong_pass.style.display = "block"
        setTimeout(()=>{
            wrong_pass.style.display = "none"
        },3000)
    } else {
    let obj_data = {
        firstName : first_name.value,
        lastName : last_name.value,
        Email : email.value,
        Password : password.value,
        Confirm : confirm_password.value 
    }
    let flag = false
    userdata.forEach(user => {
        if(user.Email == email.value){
            flag = true
        }
    });
        if(flag){
            alert("You already have an account, Please login")
        } else {
            userdata.push(obj_data)
            localStorage.setItem("userdetails",JSON.stringify(userdata))
            alert("Sign Up Successful")
            setTimeout(()=>{
                window.location.href = "./index.html"
            },1000)
        }
    }
})





