function limpiar(){
    document.getElementById("Nota1").value="";//Borrar todo en cuadro texto Nota1
    document.getElementById("Nota2").value="";//Borrar todo en cuadro texto Nota2
    document.getElementById("Nota3").value="";//Borrar todo en cuadro texto Nota3
    document.getElementById("Definitiva").value="";//Borrar todo en cuadro texto Definitiva
}
function promedio(){
    var n1=document.getElementById("Nota1").value;//ASIGNA NOTAS INGRESADAS X TECLADO
    var n2=document.getElementById("Nota2").value;//ASIGNA NOTAS INGRESADAS X TECLADO
    var n3=document.getElementById("Nota3").value;//ASIGNA NOTAS INGRESADAS X TECLADO
    //Calcular nota definitiva
    var Definitiva=(parseFloat(n1)+parseFloat(n2)+parseFloat(n3))/3;//fx promedio
    //COLOCAR NOTA DEFINITIVA EN FORMULARIO
    document.getElementById("Definitiva").value=Definitiva.toFixed(2);
}