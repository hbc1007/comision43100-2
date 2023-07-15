//---------------------------------------------------------------------------------------//
//FUNCION FLECHA - MUESTRA LOS PRODUCTOS EN LA VENTANA DEL CARRITO DE COMPRAS
//---------------------------------------------------------------------------------------//
const vistaHTML = () =>{
    let productosEnCarrito;

    if (localStorage){
        //VERIFICAMOS SI EXISTE LOCALSTORAGE
        if(localStorage.getItem('todos-Productos') !== undefined && localStorage.getItem('todos-Productos'))
        {
            try {
                //RECUPERA DATOS DEL LOCAL STORAGE
                productosEnCarrito=JSON.parse(localStorage.getItem('todos-Productos'));
                //VERIFICA PRODUCTOS EN LOCAL STORAGE
                if (!productosEnCarrito.length) {
                    //CARRITO VACIO
                    console.log(productosEnCarrito);
                    cartEmpty.classList.remove('hidden');
                    filaProductos.classList.add('hidden');
                    cartTotal.classList.add('hidden');
                    console.log('CARRITO: Se ha usado productosEnCarrito 1 (vacío) (vistaHTML)');
                } else {
                    //CARRITO LLENO
                    console.log(productosEnCarrito);
                    cartEmpty.classList.add('hidden');
                    filaProductos.classList.remove('hidden');
                    cartTotal.classList.remove('hidden');
                    console.log('CARRITO: Se ha usado productosEnCarrito 2 (lleno) (vistaHTML)');
                }
        
                //LIMPIAR HTML
                filaProductos.innerHTML = '';
        
                let impto = 0;
                let venta = 0;
                let total = 0;
                let totalOfProductos = 0;
        
                productosEnCarrito.forEach(product => {
                    const containerProduct = document.createElement('div');
                    containerProduct.classList.add('cart-product');
        
                    containerProduct.innerHTML = `
                        <div class="info-cart-product">
                            <p class="cant-prod-cart">${product.quantity}</p>
                            <p class="titl-prod-cart">${product.name}</p>
                            <p class="prec-prod-cart">${product.price}</p>
                            <p class="codi-prod-cart">${product.id}</p>
                        </div>
                        <img class="icon-close" src="../assets/img/Equis.png" alt="Equis">
                        `;
        
                    filaProductos.append(containerProduct);

                    impto = impto + parseFloat((product.quantity * product.price.slice(3)) * 0.18);
                    venta = venta + parseFloat((product.quantity * product.price.slice(3)) / 1.18);
                    total = total + parseFloat(product.quantity * product.price.slice(3));
                    totalOfProductos = totalOfProductos + product.quantity;
                })
        
                let valorForma3 = formatearValor(`${impto}`, 2);
                let valorForma2 = formatearValor(`${venta}`, 2);
                let valorFormat = formatearValor(`${total}`, 2);
                
                valorImpto.innerText = valorForma3;
                valorVenta.innerText = valorForma2;
                valorTotal.innerText = valorFormat;
                contProduct.innerText = totalOfProductos;

                console.log('CARRITO: Se ha usado la función flecha vistaHTML');
            } catch (error) {
                console.log("CARRITO: Error catch en vistaHTML", error);
            }
        }
        else{
            console.log('CARRITO: No existe el localStorage todos-Productos');
        }
    }
}