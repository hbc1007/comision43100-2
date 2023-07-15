let filaProductos = document.querySelector('.row-product');
let valorImpto = document.querySelector('.total-impto');
let valorVenta = document.querySelector('.total-venta');
let valorTotal = document.querySelector('.total-pagar');
let cartEmpty = document.querySelector('.cart-empty');
let cartTotal = document.querySelector('.cart-total');


//---------------------------------------------------------------------------------------//
//FUNCION FECHA - ACTUALIZA LA LINEA DEL PRODUCTO AGREGADO AL CARRITO DE COMPRAS
//---------------------------------------------------------------------------------------//
filaProductos.addEventListener('click', e =>{
    try {
        if (e.target.classList.contains('icon-close')){
            const product = e.target.parentElement;
            const idPro = product.querySelector('.codi-prod-cart').textContent;
             //RECUPERA DATOS DEL LOCAL STORAGE
            todosProductos = JSON.parse(localStorage.getItem('todos-Productos'));
            todosProductos = todosProductos.filter(product => product.id !== idPro);
            //GUARDA EN EL LOCAL STORAGE
            localStorage.setItem('todos-Productos', JSON.stringify(todosProductos));
    
            console.log('LOGICA1: Se ha usado la función flecha filaProductos');
            vistaHTML();
        }
    } catch (error) {
        console.log('LOGICA1: Error catch en filaProductos.addEventListener');
    }
});
