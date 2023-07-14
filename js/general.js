//---------------------------------------------------------------------------------------//
//---------------------------------------------------------------------------------------//
//FUNCION - CAMBIA COLOR HEADER CUANDO HACE SCROLL
//---------------------------------------------------------------------------------------//
const div = document.querySelector('header > div');
window.addEventListener('scroll', function() {
    div.classList.toggle('abajo', window.scrollY > 0);
});


//---------------------------------------------------------------------------------------//
//CLASE - PRODUCTOS EN CARRITO
//---------------------------------------------------------------------------------------//
class clsProducto {
    constructor(obj) {
        this.quantity = parseFloat(obj.quantity),
        this.name = obj.name,
        this.price = parseFloat(obj.price),
        this.id = obj.id
    }
}


//---------------------------------------------------------------------------------------//
//FUNCION - FORMATO NUMEROS
//---------------------------------------------------------------------------------------//
function formatearValor(valor, decimal){
    const formateador = new Intl.NumberFormat("es-PE", {
        style: "currency",
        currency: "PEN",
        maximumFractionDigits: decimal,
    });

    console.log('GENERAL: Se ha usado la función formatearValor');
    return formateador.format(valor);
};


//---------------------------------------------------------------------------------------//
//FUNCION FLECHA - MUESTRA U OCULTA VENTANA DEL CARRITO DE COMPRAS AL DAR CLICK EN LA BOLSA
//---------------------------------------------------------------------------------------//
const botonBolsaCompras = document.querySelector('.container-cart-icon');
const contenedorCartaProductos = document.querySelector('.container-cart-products');

botonBolsaCompras.addEventListener('click', () => {
    contenedorCartaProductos.classList.toggle('hidden-cart');

    console.log('GENERAL: Se ha usado la función flecha botonBolsaCompras.addEventListener');
    vistaHTML();
});


//---------------------------------------------------------------------------------------//
//FUNCION - CANTIDAD TOTAL EN BOLSA DEL CARRITO DE COMPRAS
//---------------------------------------------------------------------------------------//
let cantCarrito = 0;
let contProduct = document.querySelector('#count-products');

function cantidadBolsa(){
    let productos = [];
    const almacenados = JSON.parse(localStorage.getItem('todos-Productos'));
    if (almacenados != null){
        //INSERTA EN EL OBJETO TODO EL CONTENIDO DEL LOCAL STORAGE
        for (const objeto of almacenados)
        productos.push(new clsProducto(objeto));
        
        //SUMA LA CANTIDAD DE PRODUCTOS PARA QUE SE MUESTRE EN LA BOLSA
        for (const product of productos){
            cantCarrito += product.quantity;
        }
    }

    console.log('GENERAL: Se ha usado la función cantidadBolsa');
}

cantidadBolsa();
contProduct.innerText = cantCarrito;


//---------------------------------------------------------------------------------------//
//FUNCIONES FLECHA - FINALIZAR COMPRA - VACIAR CARRITO
//---------------------------------------------------------------------------------------//
let finalizarCarrito = document.getElementById('finalizar');
let vaciarCarrito = document.getElementById('vaciar');

finalizarCarrito.onclick = () =>{
    todosProductos=[];
    filaProductos.innerHTML = '';
    cartEmpty.classList.remove('hidden');
    filaProductos.classList.add('hidden');
    cartTotal.classList.add('hidden');
    contProduct.innerText = "0";
    localStorage.clear('todos-Productos');
    Swal.fire('Gracias por tu compra','Recibiras tu pedido en un máximo de 3 días','success');

    console.log('GENERAL: Se ha usado la función flecha finalizarCarrito.onclick');
}

vaciarCarrito.onclick = () =>{
    todosProductos=[];
    filaProductos.innerHTML = '';
    cartEmpty.classList.remove('hidden');
    filaProductos.classList.add('hidden');
    cartTotal.classList.add('hidden');
    contProduct.innerText = "0";
    localStorage.clear('todos-Productos');
    Swal.fire('Se ha vaciado el carrito','Puedes volver a seleccionar los productos de tu preferencia','success');

    console.log('GENERAL: Se ha usado la función flecha vaciarCarrito.onclick');
}
