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

while(seleccion != "no") {
    let producto = prompt("agrega un producto a tu carrito")
    let precio = 0

    if(producto == "drone1" || producto == "drone2" || producto == "drone3" || producto == "drone4" || 
    producto == "drone5" || producto == "drone6" || producto == "drone7" || producto == "drone8" || 
    producto == "drone9" || producto == "drone10" || producto == "drone11" || producto == "drone12"){
        switch(producto) {
            case "drone1":
            precio = 50;
            break;
            case "drone2":
            precio = 100;
            break;
            case "drone3":
            precio = 150;
            break;
            case "drone4":
            precio = 200;
            break;
            case "drone5":
            precio = 250;
            break;
            case "drone6":
            precio = 300;
            break;
            case "drone7":
            precio = 350;
            break;
            case "drone8":
            precio = 400;
            break;
            case "drone9":
            precio = 450;
            break;
            case "drone10":
            precio = 500;
            break;
            case "drone11":
            precio = 550;
            break;
            case "drone12":
            precio = 600;
            break;
        default:
            break;
        }
    let unidades = parseInt (prompt("cuantas unidades quiere llevar"))
    
    carrito.push({producto, unidades, precio})
    console.log(carrito)
    } else {
        alert("no tenemos ese producto en stock")
    }
    seleccion = prompt("Desea seguir comprando?")
    
    while(seleccion == "no"){
        alert("Muchas gracias, vuelva prontos")
        carrito.forEach((carritoFinal) => {
            console.log (`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}
            total a pagar por producto ${carritoFinal.unidades * carritoFinal.precio}`)
        } )
        break;
    }
}

const total = carrito.reduce ((acc, el) => acc + el.precio * el.unidades, 0) 
console.log (`el total a pagar por su compra es: ${total}`)