function actualizarReloj() {
    const Hoy = new Date();
    const Horas = String(Hoy.getHours()).padStart(2, '0');
    const Minutos = String(Hoy.getMinutes()).padStart(2, '0');
    const Segundos = String(Hoy.getSeconds()).padStart(2, '0');
    const timeString = `${Horas}:${Minutos}:${Segundos}`;
    
    document.getElementById('reloj').textContent = timeString;
}

setInterval(actualizarReloj, 1000);
actualizarReloj(); // Llamada inicial para mostrar el reloj inmediatamente