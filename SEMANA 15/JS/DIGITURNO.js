function prefer(){
    let num=1; //Numero inicial de turno preferencial
    let res=true;
    while (num<99 && res==true){
        nomuser=prompt("INGRESE NOMBRE DE USUARIO");
        if (nomuser!==null){
            var n=num.toString().padStart(2,'0');
            res=confirm("ESTIMADO USUARIO:"+" "+" "+nomuser+"\n"+"SU TURNO ES:"+" "+"E"+n+"\n"+"ESPERE SU LLAMADO...");
            num++;//Incrementa turno
        }else{
            alery("ERROR.. NO HAY DATOS");
            break;
        }
    }
}
function user(){
    let num=1; //Numero inicial de turno general
    let res=true;
    while (num<99 && res==true){
        nomuser=prompt("INGRESE NOMBRE DE USUARIO");
        if (nomuser!==null){
            var n=num.toString().padStart(2,'0');
            res=confirm("ESTIMADO USUARIO:"+" "+" "+nomuser+"\n"+"SU TURNO ES:"+" "+"A"+n+"\n"+"ESPERE SU LLAMADO...");
            num++;//Incrementa turno
        }else{
            alery("ERROR.. NO HAY DATOS");
            break;
        }
    }
}