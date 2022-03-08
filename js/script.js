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
  let years = user.registered.age;


  info.innerHTML= `
   <img class="foto" src="${foto}" width="128" />
  <h2 class="nombre">
    ${nombre} ${apellido}
  </h2> 

  <div class="email">
    <i class="fas fa-envelope"></i> Email: ${email}
  </div>
  <div class="pais">
   <i class="fas fa-flag"></i>  Pais: ${pais}
  </div>  
  <div class="telefono">
    <i class="fas fa-phone"></i> Telefono: ${telefono}  
  </div>
  <div class="years"> Cliente desde hace ${years} años.
  </div>
   `;


}

