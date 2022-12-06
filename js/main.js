const productos = [
    {nombre: "drone1", precio: 50},
    {nombre: "drone2", precio: 100},
    {nombre: "drone3", precio: 150},
    {nombre: "drone4", precio: 200},
    {nombre: "drone5", precio: 250},
    {nombre: "drone6", precio: 300},
    {nombre: "drone7", precio: 350},
    {nombre: "drone8", precio: 400},
    {nombre: "drone9", precio: 450},
    {nombre: "drone10", precio: 500},
    {nombre: "drone11", precio: 550},
    {nombre: "drone12", precio: 600},
];
let carrito = []

let seleccion = prompt("Bienvenido Desea comprar algun producto si o no")

while(seleccion != "si" && seleccion != "no" ){
    alert("Porfavor ingrese si o no")
    seleccion = prompt("Desea adquirir un producto si o no")
}

if(seleccion == "si"){
    alert("a continuacion nuestro catalogo")
    let todoslosproductos = productos.map((producto) => 
        producto.nombre + " " + producto.precio + "$" );
    alert(todoslosproductos.join(" - "))
}else if (seleccion == "no"){
    alert("Gracias por venir, vuelva pronto")
}
