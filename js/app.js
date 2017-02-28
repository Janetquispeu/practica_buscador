document.getElementById("coordenada").onmousemove = mouse(event);

var mouse = function (e) {
  var despX = document.documentElement.scrollLeft; //desplazamiento de la pagina al hacer scroll
  var despY = document.documentElement.scrollTop;
  var ventanaX = e.clientX; //coordenadas de la ventana
  var ventanaY = e.clientY;
  var paginaX =  ventanaX + despX; //coordenadas de la página
  var paginaY =  ventanaY + despY;
  var coorVentana = "Coordinates: (" + ventanaX + "," + ventanaY + ")";
  var coorPagina = "Coordinates: (" + paginaX + "," + paginaY + ")";

  var data = {
    title: "Ratón",
    param1: coorVentana,
    param2: coorPagina,
    class1: "fondoAzul",
    class2: "fondoAmarillo"
  }

  informacion(data);
}

document.onkeyup = teclado;

function teclado(elEvento) {
  var evento = window.event || elEvento;
  var mensajeCaracter = "Caracter: "+ evento.keyCode;
  var mensajeLetra= "Carácter pulsado:  " + evento.key;

  var data = {
    title: "Mouse",
    param1: mensajeCaracter,
    param2: mensajeLetra,
    class1: "fondoAmarillo",
    class2: "fondoAzul"
  }

  informacion(data);

}

function informacion(data){
  $("#title").text(data.title);
  $("#demo-ventana").text(data.param1);
  $("#demo-pagina").text(data.param2);
  $("div").removeClass(data.class1);
  $("div").addClass(data.class2);

}

