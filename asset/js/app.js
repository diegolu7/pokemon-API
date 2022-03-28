let url = "https://pokeapi.co/api/v2/pokemon/charmander";


fetch(url)
  //promesas
  .then(respuesta => respuesta.json())//pasamos a Json
  .then(data => { //data que recivimos recibimos 
    console.log(data)

    let card = document.getElementById('card');

    card.innerHTML = `
    <h2> ${data.name} </h2> 
        <h2> ${data.weight}kg </h2>

    <img src='${data.sprites.front_default}'/>
    `;

  })
  .catch(err => console.log(err));



function buscar() {
  //tomo el valor del input
  let buscado = document.querySelector("#input").value;
  let url = "https://pokeapi.co/api/v2/pokemon/";

  if (buscado) {
    url = url + buscado;


    //consultamos la api nuevamente con nueva url

    fetch(url)
      //promesas
      .then(respuesta => respuesta.json())//pasamos a Json
      .then(data => { //data que recivimos recibimos 
        console.log(data)

        let card = document.getElementById('card');

        card.innerHTML = `
    <h2> ${data.name} </h2> 
    <h2> ${data.weight}kg </h2>
    

      <img src='${data.sprites.front_default}' />
    `;

      })
      .catch(err => console.log(err));


  } else {
    alert("no hay datos");
  }
}