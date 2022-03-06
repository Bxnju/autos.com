
function api(){
  fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(data => procesarRespuesta(data));
}

function procesarRespuesta(datos){

  let titulo = datos.results[0].name.title;
  let nombre = datos.results[0].name.first;
  let apellido = datos.results[0].name.last;
  let genero = datos.results[0].gender;
  let pais = datos.results[0].location.country;
  let email = datos.results[0].email;
  let foto = datos.results[0].picture.large;

  document.write(`La persona seleccionada al azar es ${nombre} ${apellido}, es un@ ${genero} de ${pais} y su email es ${email} <br><br> Esta es su foto: <br><br> <img src="${foto}" width="256" />`)


}

