const nuevacontraseña = "1234";
let contraseña;

do{
    contraseña = prompt("Introduce la contraseña");

}while (contraseña != nuevacontraseña);

alert("La contraseña es correcta");


/* Intento

while (contraseña != nuevacontraseña){

    let nuevacontraseña = prompt("Ingrese la contraseña");
    if (contraseña == nuevacontraseña){
        alert("La contraseña es correcta");
        break
    }else{
        alert("La contraseña es incorrecta");
    }
}
*/