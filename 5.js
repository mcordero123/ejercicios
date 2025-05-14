let contraseña = prompt("Introduce la contraseña");

const nuevacontraseña = "1234";


do{
    contraseña = prompt("Introduce la contraseña");

}while (contraseña != nuevacontraseña);

alert("La contraseña es correcta");


/*while (contraseña != nuevacontraseña){

    let nuevacontraseña = prompt("Ingrese la contraseña");
    if (contraseña == nuevacontraseña){
        alert("La contraseña es correcta");
        break
    }else{
        alert("La contraseña es incorrecta");
    }
}
*/