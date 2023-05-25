function openMenu(){
    document.getElementById("mainMenu").style.width="400px"; //VISTA CELULAR
    document.getElementById("mainMenu").style.display="flex"; //VISTA CELULAR
    document.getElementById("mainMenu").style.height="1000px"; //VISTA CELULAR
    document.getElementById("mainMenu").style.display="none"; //VISTA CELULAR
}
function closeNav(){
    document.getElementById("mainMenu").style.width="0px"; // CERRAR VISTA CELULAR
    document.getElementById("mainMenu").style.transition="0.9S all"; // CERRAR VISTA CELULAR
    window.location.reload(); // asemeja al volver a cargar pagina web - f5-
}