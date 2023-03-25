const tombol_daftar = document.getElementById("daftar");

tombol_daftar.onclick = (e)=> {
  e.preventDefault();
  const nama = document.getElementById("nama_user").value;
  const email = document.getElementById("email_user").value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const umur = document.getElementById('umur').value;

  let fokusList = [];
  let checkboxes =document.querySelectorAll("input[type='checkbox']:checked");
  checkboxes.forEach((item)=> {
    fokusList.push(item.value)
  })

  let dataVolunteer = [];
  dataVolunteer.push({
    Nama: nama,
    Email: email,
    Gender: gender,
    Fokus: fokusList,
    Klas_Umur: umur
  });

  let stringUser = JSON.stringify(dataVolunteer);
  sessionStorage.setItem("volunteerer", stringUser);
  console.log(stringUser);
  // alert(console.log(stringUser));

  window.location.href = "data-diri.html";
  //   let parseUser = JSON.parse(stringUser);
  //   console.log(sessionStorage.getItem("Nama", stringUser));
}