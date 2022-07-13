// una bienvenida al usuario
let bienvenida = prompt ("bienvenidx!! cual es tu nombre?");
alert ("exelente, un palcer" + " " +  bienvenida);
let edad = parseInt(prompt("¿Cuantos años tenes?"));
if (edad >= 18){
    alert( "Genial!!! Que disfrutes tu compra!!!");
}
else {
    alert ( "mmm sos menor de edad , por favor estate acompañadx de un mayor para tu mejor experiencia y satisfaccion!")
}
alert ("MUY BIEN CONTINUEMOS")


// esto seria el carrito de compras, en este caso son remeras de bandas de musica.!
// primera funcion donde se trabajan los productos con sus caracteristicas y especificaciones

function agregarAlCarrito(productos, color, talle, stock){

const tenemosStock = validarStock(stock);
if(tenemosStock === "tenemos stock"){
    console.log ("agregaste al carrito de compras" + (" ") + productos + (" ") + color +(" ") + talle);
}
else{
    console.log ( "disculpa , por el momento no hay stock");
}
}
//funcion para validar si hay stock

function validarStock(stockDelProducto){
let stock = 1
    for (let i = stock ; i <= 10; i++){
    if (stockDelProducto + i >= stock){
        console.log ("descontamos un producto del stock")
    }
    }
    if( stockDelProducto > 0){
        return "tenemos stock";
    }
    else if (stockDelProducto > 20){
        return "no tenemos stock";
    }
}



agregarAlCarrito("remera de Pink Floyd", "negra", "small", 10 );
validarStock(5);
