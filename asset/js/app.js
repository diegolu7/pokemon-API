let url = "https://pokeapi.co/api/v2/pokemon/charmander";


fetch(url)
  //promesas
  .then(respuesta => respuesta.json())//pasamos a Json
  .then(data => { //data que recivimos recibimos 
    console.log(data)

    let card = document.getElementById('card');

    card.innerHTML = `
    <p> ${data.name} </p> 
        <p> ${data.weight}kg </p>

    <img src='${data.sprites.front_default}'/>
    `;

  })
  .catch(err => console.log(err));



function buscar() {
  //tomo el valor del input
  let buscado = document.querySelector("#input").value;
  let url = "https://pokeapi.co/api/v2/pokemon/";

  if (buscado) {
    url = url + buscado.toLowerCase();


    //consultamos la api nuevamente con nueva url

    fetch(url)
      //promesas
      .then(respuesta => respuesta.json())//pasamos a Json
      .then(data => { //data que recivimos recibimos 
        console.log(data)

        let card = document.getElementById('card');

        card.innerHTML = `
    <p> ${data.name} </p> 
    <p> ${data.weight}kg </p>
    

      <img src='${data.sprites.front_default}' />
    `;

      })
      .catch(err => alert("Nombre incorrecto"));




  } else {
    alert("Ingrese nombre del Pokémon");
  }
}

