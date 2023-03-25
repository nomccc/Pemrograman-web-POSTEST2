const tombol_daftar = document.getElementById("daftar-akun");
// tombol_daftar.onclick = regis;

tombol_daftar.onclick = (e) => {
    e.preventDefault();
    const nama = document.getElementById("daftar-nama").value;
    const email = document.getElementById("daftar-email").value;
    const pass = document.getElementById("daftar-pw").value;

    localStorage.setItem("Nama", nama);
    localStorage.setItem("Email", email);
    localStorage.setItem("Password", pass);

    alert("berhasil daftar");
};

