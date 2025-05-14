let base = Number(prompt("Introduce la base"));
let altura = Number(prompt("Introduce la altura"));

let perimetro = 2 * (base + altura);
let area = base * altura;

alert("El perimetro es " + perimetro);
alert("El area es " + area);

if (base == altura){
    alert("Es un cuadrado");
}else{
    alert("Es un rectángulo");
}