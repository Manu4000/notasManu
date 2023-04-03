const agregarNota = () => {
    let tituloNota = document.getElementById("tituloNota").value;
    let descripcionNota = document.getElementById("descripcionNota").value;
  
    let nuevaNota = document.createElement("div");
    let nuevoTitulo = document.createElement("h5");
    let nuevoTituloTexto = document.createTextNode(tituloNota);
    let nuevaDescripcion = document.createElement("p");
    let nuevaDescripcionTexto = document.createTextNode(descripcionNota);
  
    nuevoTitulo.appendChild(nuevoTituloTexto);
    nuevaNota.appendChild(nuevoTitulo);
    nuevaDescripcion.appendChild(nuevaDescripcionTexto);
    nuevaNota.appendChild(nuevaDescripcion);
  
    let contenedorNotas = document.getElementById("nuevaNota");
    contenedorNotas.appendChild(nuevaNota);
  };
  