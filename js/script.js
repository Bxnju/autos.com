window.onload = api();

function api(){
  fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(data => {
  const user = data.results[0];
  console.log(user);
  displayUser(user);
})
}

function displayUser(user){

 const info = document.getElementById('info');

 let titulo = user.name.title;
  let nombre = user.name.first;
  let apellido = user.name.last;
  let telefono = user.phone;
  let pais = user.location.country;
  let email = user.email;
  let foto = user.picture.large;


  info.innerHTML= `
  <h3 class="nombre">
    ${nombre} ${apellido}
  </h3> 

  <div class="email">
    ${email}
  </div>
  <div class="pais">
    ${pais}
  </div>  
  <div class="telefono">
    ${telefono}
  </div>  
    <img class="foto" src="${foto}" width="256" />`;


}

