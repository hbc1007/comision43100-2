let todosProductos = [];
let contenedorProductos = document.getElementById('listaProductos');
let filaProductos = document.querySelector('.row-product');
let listaProductos = document.querySelector('.container-items');
let listaBolsa = document.querySelector('.container-cart-icon');
let valorImpto = document.querySelector('.total-impto');
let valorVenta = document.querySelector('.total-venta');
let valorTotal = document.querySelector('.total-pagar');
let cartEmpty = document.querySelector('.cart-empty');
let cartTotal = document.querySelector('.cart-total');


//---------------------------------------------------------------------------------------//
//FUNCION - RENDERIZACION DE PRODUCTOS
//---------------------------------------------------------------------------------------//
function renderizarProductos(objProductos){
    try {
        //VACIAMOS EL CONTENEDOR PARA EVITAR DUPLICADOS
        contenedorProductos.innerHTML='';
        //CARGAMOS LAS CARTAS DE LOS PRODUCTOS SOLICITADOS
        for(const itemProducto of objProductos){
            contenedorProductos.innerHTML+=`
            <div class="item">
                <figure>
                    <img src="${itemProducto.imagen}" alt="">
                </figure>
                <div class="info-product">
                    <p class="name">${itemProducto.nombre}</p>
                    <p class="price">${formatearValor(itemProducto.precio,2)}</p>
                    <button id="${itemProducto.id}" class="btn-add-cart botonCompra">Añadir al carrito</button>
                </div>
            </div>
            `;
        }
        console.log('LOGICA2: Se ha usado la función renderizarProductos');
    } catch (error) {
        console.log('LOGICA2: Error catch en la función renderizarProductos');    
    }

    let botones = document.getElementsByClassName('btn-add-cart');
    for (const boton of botones){
        boton.onmouseover = () => {
            boton.classList.replace('botonCompra','botonColor');
        }
        boton.onmouseout = () => {
            boton.classList.replace('botonColor','botonCompra');
        }
    }
}


//---------------------------------------------------------------------------------------//
//FUNCION FECHA - INSERTA LA LINEA DEL PRODUCTO AL CARRITO DE COMPRAS
//---------------------------------------------------------------------------------------//
listaProductos.addEventListener('click', e =>{
    try {
        if (e.target.classList.contains('btn-add-cart')){
            let recoveredData = localStorage.getItem("todos-Productos");
            if (recoveredData != null){
                todosProductos = JSON.parse(recoveredData);
            }
    
            const product = e.target.parentElement;
    
            const infoProducto = {
                quantity: 1,
                name: product.querySelector('.name').textContent,
                price: product.querySelector('.price').textContent,
                id: product.querySelector('button').getAttribute('id'),
            };
    
            //METODO SOME, BUSCA EL PRIMER ELEMENTO ENCONTRADO Y DEVUELVE TRUE O FALSE
            const exists = todosProductos.some(product => product.id === infoProducto.id)
    
            //
            if (exists){
                //ACTUALIZACION DE LA CANTIDAD POR PRODUCTO
                const products = todosProductos.map(product => {
                    if(product.id === infoProducto.id){
                        product.quantity++; //SUMA
                        return product;
                    }
                    else{
                        return product;
                    }
                });
    
                todosProductos = [...products];
            }
            else
            {
                todosProductos = [...todosProductos, infoProducto];
            }
    
            //AGREGA DATOS DEL CARRITO DE COMPRAS EN EL LOCAL STORAGE
            localStorage.setItem('todos-Productos', JSON.stringify(todosProductos));
    
            console.log('LOGICA2: Se ha usado la función flecha listaProductos.addEventListener');
            vistaHTML();
        }
    } catch (error) {
        console.log('LOGICA2: Error catch en listaProductos.addEventListener');
    }
})


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
    
            console.log('LOGICA2: Se ha usado la función flecha filaProductos.addEventListener');
            vistaHTML();
        }    
    } catch (error) {
        console.log('LOGICA2: Error catch en filaProductos.addEventListener');
    }
});
