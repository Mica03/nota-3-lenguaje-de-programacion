let contenedorProductosDestacados = document.getElementById('productosDestacados')

let contenidoDetalles = document.getElementById('detallesTraduccion')
let boton = document.getElementById('traducir')

$('document').ready(function(){
    $.ajax({
        url: 'idioma-ingles.html',
        type: 'get',
        success: function(respuesta){
            contenidoDetalles.innerHTML = respuesta
        },
        error: function(){
            console.log('No carga el archivo');
        }
    })

    $('#traducir').click(function(){
        $(this).toggleClass('idioma');

        if(boton.getAttribute('class','idioma')){
            $.get({
                url: 'idioma-espanol.html',
                success: function(respuesta){
                    contenidoDetalles.innerHTML = respuesta
                    boton.innerText = 'Traducir'
                }
            })
        } else {
            $.get({
                url: 'idioma-ingles.html',
                success: function(respuesta){
                    contenidoDetalles.innerHTML = respuesta
                    boton.innerText = 'Translate'
                }
            })
        }
    });

});
    







$('document').ready(function(){
    $.getJSON({
        url:'productos.json',
        success: function(respuesta){
            $.each(respuesta,function(index,productos){
                html = '<div class="col-md-3 productos-cartas">';
            html += '<div class="card">';
            html += '<img src="'+ productos.image +'" class="card-img-top" alt="'+ productos.name +'">';
            html += '<div class="card-body">';
            html += '<h5 class="card-title">'+ productos.name + ' ' + productos.id +'</h5>'; // Corregido h5 a h5
            html += '<p class="card-text">' + productos.price + '</p>';
            html += '<div class="d-flex justify-content-end">';
            html += '<a href="#" class="btn btn-warning">Ver más detalles</a>';
            html += '</div>';
            html += '</div>';
            html += '</div>';
            html += '</div>';

                $('#productosDestacados').append(html);

            })
        },
        error: function(){
            contenedorProductosDestacados.innerHTML = 'No hay Productos Destacados'
        }
    })
})

//Ventana producto 1
let ventanaAbrir;
function abrirVentanaProducto(){
    ventanaAbrir=window.open("./producto1.html", "Producto", "states=yes,resizable=yes,widht=50px,heigh=100px")
}


//Ventana producto 2
let ventanaAbrir2;
function abrirVentanaProducto2(){
    ventanaAbrir2=window.open("./producto1.html", "_blank")
}

setTimeout(abrirVentanaProducto2,9000);





//FUNCION OFFCANVA

//FUNCION OFFCANVA PARA MANIPULAR LOS ELEMENTOS

const miOffcanva = document.getElementById('offcanvasExample')

//AGREGAR UN OBSERVADOR AL OFFCANVA
miOffcanva.addEventListener('show.bs.offcanvas', function(event){

  //CAMBIO TITULO OFFCANVA
  let botoncanva = event.relatedTarget

  let tituloCanva = botoncanva.getAttribute('data-titulo-canva')
  document.getElementById('offcanvasExampleLabel').innerText = tituloCanva


  //CAMBIO CONTENIDO OFFCANVA
  let contenidoCanva = botoncanva.getAttribute('data-contenido-canva')
  document.querySelector('.offcanvas-body').textContent = contenidoCanva

})




//FUNCION MODAL
//Funcion Modal para manipular los eventos

const miVentanaDetalle = document.getElementById('ventanaDetalles')

// agregar un observador sobre el modal

miVentanaDetalle.addEventListener('show.bs.modal', function(event){
    

    //reconocer el elemento que habilita el evento modal
    let boton = event.relatedTarget //etiquetado relacionado 

    let mensaje = boton.getAttribute('data-titulo')
    let contenido = boton.getAttribute('data-contenido')

    document.getElementById('tituloModal').innerText = mensaje
    document.querySelector('.modal-body').innerText = contenido
})






//PLUGINS
//AOS
AOS.init();

Fancybox.bind("[data-fancybox]");
