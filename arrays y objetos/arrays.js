/*var fruta1 = "fresa";
var fruta2 = "Mango";
var fruta3 = "Banano";
//crear array    0        1        2 
var frutas = ["fresa", "mango","Banano"];
//Mostrar los datos del array
document.write("frutas: "+frutas[2]);
*/
//crear objeto
/*
var verduras = {
    "v1":"Pepino",
    "v2":"Cebolla",
     v3 : "Ajo",
     23 : "Zanahoria"
}
//mostrar los datos del objeto
document.write("verduras: "+ verduras["v1"] )
*/
//crear arreglo 
/*
var sancocho = [
    "papa",
     7363,
     false,
     function saludo(){
        return "Hola desde la funcion";
     },
     ["maggi",98989,true],
     {
        "s1":"yuca",
        "s2":"pollo",
     }
];
//mostrar los datos
document.write("dato 1 :"+ sancocho[3]() +"<br>");
document.write("dato 2 :"+ sancocho[4][1] +"<br>");
document.write("dato 3 :"+ sancocho[5].s2 +"<br>"); */
/*
var sancocho = {
    "s1" : "papa",
    "s2" : 3432,
    "s3" : true,
    "s4" : function sal() {
        return "Hola Mundo";
    },
    "s5" : ["Yuca","Cerdo","habichuelas"],
    "s6" : {
        "h1" : "Cilantro",
        "h2" : "cebolla",
        "h3" : 909
    }
}
//mostrar datos
document.write("dato 1 :"+ sancocho.s4() +"<br>");
document.write("dato 2 :"+ sancocho.s5[2] +"<br>");
document.write("dato 3 :"+ sancocho.s6.h2 +"<br>");
*/
//array vacio
/*
var frutas = [];
//estatica
//frutas[0] = "mango";
//frutas[1] = "Piña";
//dinamica
var cantidad = Number(prompt("Cantidad de frutas a comprar?"));
for( var x = 0; x < cantidad; x++ ){
    frutas[x] = prompt("Digite nombre de la fruta" + (x+1));
}
//mostrar datos
for( var i = 0; i < frutas.length; i++){
    document.write("fruta: "+frutas[i]+"<br>");
}
*/
/*
var verduras = {
    "v1": "",
    "v2": "",
    "v3": ""
}
var verduras2 = {}
//estatica
verduras.v1 = prompt("digite una verdura");
verduras.v2 = "Tomate";

verduras2.ver1 = "Ajo";
verduras2.ver2 = "Zanahoria";

for(var clave in verduras2) {
    document.write("verduras: "+verduras2[clave]+"<br>");
}
*/
//llenar un objeto vacio con 
/*
var empleados = {
    nombre : "",
    salario : "",
    profesion: ""
}
for (var key in empleados) {
    empleados[key] = prompt("Digite "+key);
}
//mostrar datros
for (var k in empleados) {
    document.write(k +": "+empleados[k]+"<br>");
}
*/
var compra = {
    "producto": [],
    "cantidad": [],
    "precio" : []
}
var cantiPro = parseInt(prompt("¿Cuantos productos va a comprar?"));
for(var i = 0; i < cantiPro; i++){
    for(var pro in compra){
        compra[pro][i] = prompt("Digite "+pro+" #"+(i+1));
    }
    
}
//mostrar datos
var totalCompra = 0;
for(var j =0; j < cantiPro; j++){
    totalPro = 0;
    for(var producto in compra){
        document.write(producto+ " : "+compra[producto][j]+"<br>");
        totalPro = Number(compra.cantidad[j]) * Number(compra.precio[j]);
    }
    totalCompra += totalPro;
    document.write("total :"+ totalPro+"<br>");
    document.write("----------- <br>")
}
document.write("total :"+ totalCompra +"<br>");