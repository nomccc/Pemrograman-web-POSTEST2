const tampil = document.getElementById("welcome");
let nama_user = localStorage.getItem("Nama");

// console.log(nama_user);
tampil.innerHTML = `Selamat datang, ${nama_user}. Silakan isi data diri dibawah ini:`;