module.exports = (porcentaje = 0, pasosTotales = 10) => {
  try {
    porcentaje = porcentaje > 100 ? 100 : porcentaje;
    let completado = '🔘';
    let vacio = '⚫️';
    let progreso = Math.round((porcentaje / 100) * pasosTotales);
    return `${completado.repeat(progreso)}${vacio.repeat(pasosTotales - progreso)}`;
  }
  catch (e) {
    console.error(e)
  }
};