
let carrito=[]


function obtenerPeliculas(){
    const URLGET="./stock.json"
    fetch(URLGET)
    .then(resultado=>resultado.json())
    .then(data=>{
        let pelicula=data.peliculas
        console.log(pelicula);
        pelicula.forEach(pelicula => {
            const {foto, nombre, genero, precio, duracion, estreno, id}= pelicula
        {
            document.querySelector(".card").innerHTML+=`
        <li class="li-item">
        <div class="contenedorFoto">
            <img  class="contenedorImg" src="${foto}">
        </div>
          <div class="container"> 
          <h2 class="card-title"> <b>Titulo: ${nombre} </b></h2>
          <p class="card-text"> Genero ${genero} </p>
          <p class="card-text"> Precio: $${precio}</p>
          <p class="card-text"> Duracion:${duracion}</p>
          <p class="card-text">Estreno: ${estreno}</p>
          <button class="btn btn-secondary" id="detalles${id}"> Mas Detalles</button>
          <button class="btn btn-secondary" id="boton${id}"> Agregar al carro</button>
          </div>   
        </li>` 
        }
        document.getElementById(`boton${id}`).addEventListener("click",function () {
            agregarCarro()})
            
       document.getElementById(`detalles${id}`).addEventListener("click", function (){
            detalles()})
    });
    }) 
}
obtenerPeliculas()
    


/*const renderizarPeliculas= async()=>{
    document.querySelector(".card").innerHTML=""
    let peliculaTraida = await traerPeliculas()
    peliculaTraida.forEach(pelicula=>{
        const {foto, nombre, genero, precio, duracion, estreno, id}= pelicula
        {
            document.querySelector(".card").innerHTML+=`
        <li class="li-item">
        <div class="contenedorFoto">
            <img  class="contenedorImg" src="${foto}">
        </div>
          <div class="container"> 
          <h2 class="card-title"> <b>Titulo: ${nombre} </b></h2>
          <p class="card-text"> Genero ${genero} </p>
          <p class="card-text"> Precio: $${precio}</p>
          <p class="card-text"> Duracion:${duracion}</p>
          <p class="card-text">Estreno: ${estreno}</p>
          <button class="btn btn-secondary" id="detalles${id}"> Mas Detalles</button>
          <button class="btn btn-secondary" id="boton${id}"> Agregar al carro</button>
          </div>   
        </li>` 
        }
       document.getElementById(`boton${id}`).addEventListener("click",function () {
            agregarCarro(peliculaTraida)})
            
       document.getElementById(`detalles${id}`).addEventListener("click", function (){
            detalles(peliculaTraida)})
           
        }
    
    )} 
//renderizarPeliculas()



/*const GuardarLocalS= (clave,valor)=>{
    localStorage.setItem(clave,valor);
}*/

/*for (const peliculas of carteleraCine) {
    GuardarLocalS(peliculas.id , JSON.stringify(peliculas))
}*/

//GuardarLocalS("listaPeliculas",JSON.stringify(carteleraCine));


/*let listaA=JSON.parse(localStorage.getItem("listaPeliculas"));
console.log(listaA);*/

 
let nombrePelicula=document.querySelector("#entrada");
 
nombrePelicula.addEventListener("keyup",buscarPelicula)

function buscarPelicula(){
    let nombre=nombrePelicula.value
    console.log(nombre.length);
    if(nombre.length===0){
        obtenerPeliculas()
    }else{

        let peliculaEncontrada=pelicula.filter(pelicula=>pelicula.nombre.includes(nombre))
        renderizarUna(peliculaEncontrada);
        
    }
    
}




/*function renderizar () {
    document.querySelector(".card").innerHTML=""
    for (const pelicula of carteleraCine) {
       document.querySelector(".card").innerHTML+=`
        <li class="li-item">
        <div class="contenedorFoto">
            <img  class="contenedorImg" src="${pelicula.foto}">
        </div>
          <div class="container"> 
          <h2 class="card-title"> <b>Titulo: ${pelicula.nombre} </b></h2>
          <p class="card-text"> Genero ${pelicula.genero} </p>
          <p class="card-text"> Precio: $${pelicula.precio}</p>
          <p class="card-text"> Duracion:${pelicula.duracion}</p>
          <p class="card-text">Estreno: ${pelicula.estreno}</p>
          <button class="btn btn-secondary" id="detalles${pelicula.id}"> Mas Detalles</button>
          <button class="btn btn-secondary" id="boton${pelicula.id}"> Agregar al carro</button>
          </div>   
        </li>` 
       
    }

    carteleraCine.forEach(pelicula =>document.getElementById(`boton${pelicula.id}`).addEventListener("click",function () {
    agregarCarro(pelicula)
    } ))
    carteleraCine.forEach(pelicula=>document.getElementById(`detalles${pelicula.id}`).addEventListener("click", function (){
    detalles(pelicula)
    }))
   
}*/

function renderizarUna(obtenerPeliculas){ 


    if(pelicula.length !==0){
    
        for (const pelicula of obtenerPeliculas) {
       document.querySelector(".card").innerHTML+=`
        <li class="li-item">
        <div class="contenedorFoto">
            <img  class="contenedorImg" src="${pelicula.foto}">
        </div>
          <div class="container"> 
          <h2 class="card-title"> <b>Titulo: ${pelicula.nombre} </b></h2>
          <p class="card-text"> Genero ${pelicula.genero} </p>
          <p class="card-text"> Precio: $${pelicula.precio}</p>
          <p class="card-text"> Duracion:${pelicula.duracion}</p>
          <p class="card-text">Estreno: ${pelicula.estreno}</p>
          <button class="btn btn-secondary" id="detalles${pelicula.id}"> Mas Detalles</button>
          <button class="btn btn-secondary" id="boton${pelicula.id}"> Agregar al carro</button>
          </div>   
        </li>` 
       
    }

    pelicula.forEach(pelicula =>document.getElementById(`boton${pelicula.id}`).addEventListener("click",function () {
    agregarCarro(pelicula)
    }))
    pelicula.forEach(pelicula=>document.getElementById(`detalles${pelicula.id}`).addEventListener("click", function (){
    detalles(pelicula)
    })) 
} else{ 
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'no se encuentran peliculas con ese nombre!',
    })} }
 


renderizarUna()




function agregarCarro(nuevaPelicula) { 
    carrito.push(nuevaPelicula)
    Swal.fire(
        'listo!',
        `agregaste  ${nuevaPelicula.nombre} al carro`,
        'success'
      )
      
      console.log(listaA);
    console.log(carrito)
    document.getElementById("tablaCarrito").innerHTML+=`
    <tr>  
    <td>${nuevaPelicula.nombre} </td>
    <td>${nuevaPelicula.precio} </td>
    <td>${nuevaPelicula.duracion} </td>`
}




function detalles (detalle){
     let detalles= URLGET.find(elemento=>elemento.id == detalle.id)
     alert(detalles.descripcion)
}


    
     /*agregarCarrito()
     mostrarCarrito()*/
    
 

/*function agregarCarrito(id){
let agregarPelicula=carteleraCine.find(pelicula.id===id)
console.log(agregarPelicula);
carrito.push(agregarPelicula)
mostrarCarrito(agregarPelicula)
}

function mostrarCarrito (agregarPelicula){
let div=document.createElement("div")
div.classList.add("peliculaEnCarrito")
div.innerHTML = `<p>${agregarPelicula.nombre}</p>
                 <p>precio:${agregarPelicula.precio}</p>
                 <button class="boton-eliminar"</button> `
                  Cart.appendChild(div)
}

function actualizarCarrito(){

}*/