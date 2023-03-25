const form = document.getElementById("form-login");
const email = document.querySelector('input[type="email"]');
const pass = document.querySelector('input[type="password"]');

form.addEventListener("submit", (d)=>{
  d.preventDefault();

  const local_email= localStorage.getItem("Email");
  const local_pass = localStorage.getItem("Password");

  if (email.value == local_email && pass.value == local_pass){
    alert("berhasil login!");
    window.location.href = "homepage.html";
  } else {
    console.log(email.value, local_email);
    alert("Email atau password salah!")
  }

})