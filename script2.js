function mostrarResultados() {
    let form = document.getElementById('radios');
    let respuestasCorrectas = 0;
  
    if (form.pregunta1.value === 'op1') {
      respuestasCorrectas++;
    }
  
    if (form.pregunta2.value === 'op5') {
      respuestasCorrectas++;
    }
  
    if (form.pregunta3.value === 'op6') {
      respuestasCorrectas++;
    }
  
    if (form.pregunta4.value === 'op10') {
      respuestasCorrectas++;
    }
  
    if (form.pregunta5.value === 'op12') {
      respuestasCorrectas++;
    }
  
    if (form.pregunta6.value === 'op15') {
      respuestasCorrectas++;
    }
  
    if (form.pregunta7.value === 'op20') {
      respuestasCorrectas++;
    }
  
    if (respuestasCorrectas === 7) {
        alert('¡Felicidades! Número de aciertos: ' + respuestasCorrectas);
      } else {
        alert('¡Oops! Prueba de nuevo. Número de aciertos: ' + respuestasCorrectas);
      }
  }