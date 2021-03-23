function showRespuesta(clase){
    let respuesta = document.querySelector('.' + clase + ' > .respuesta');
    let pregunta = document.querySelector('h3')

   

	if(respuesta.style.display == 'none'){
        respuesta.style.display = 'block';
    }else if(respuesta.style.display == 'block'){
        respuesta.style.display = 'none'
    }
    
}