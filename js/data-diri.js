const form = document.getElementById("form-daftar");

// form.addEventListener("submit", (e)=> {
//   e.preventDefault();
const nama_usr = document.getElementById("nama_usr");

const ses_data = sessionStorage.getItem("volunteerer");
// const ses_email = sessionStorage.getItem("Email");
// const ses_fokus = sessionStorage.getItem("Fokus");

console.log(ses_data);
nama_usr.innerHTML = `data diri: ${ses_data}`;
// console.log(ses_email);

  // nama_usr.innerHTML = `Nama: ${ses_nama}`;
// })