const diaHoy=new Date();

let valor=diaHoy;

// Retorna el número del mes 0=Enero
valor=diaHoy.getMonth();

// Retorna el número del día 0=Domingo
valor=diaHoy.getDay();

// Retorna el número del dia del mes
valor=diaHoy.getDate();

// Minutos de la hora
valor=diaHoy.getMinutes();

// Horas del dia
valor=diaHoy.getHours();

// Timestamp
valor=diaHoy.getTime();

// Año actual
valor=diaHoy.getFullYear();

console.log(valor);