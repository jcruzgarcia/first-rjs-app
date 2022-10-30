const products = [
    { 
        id: '1', 
        name: 'Reloj de pulsera Rolex', 
        price: 1000, 
        category: 'accesorios', 
        img:'https://i.pinimg.com/564x/25/06/6a/25066a8dee945331553ee78cf721738d.jpg', 
        stock: 25, 
        description:'Descripcion de Reloj Rolex'
    },
    
    { id: '2', name: 'Remera Lacoste', price: 800, category: 'ropa', img:'https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/r/e/remera-lacoste-sport-blanca-40002h204223522-1.jpg', stock: 16, description:'Descripcion de Remera Lacoste'},
    { id: '3', name: 'Zapatillas Reebok', price: 1200, category: 'calzado', img:'https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/1/1/111010049800001-1.jpg', stock: 10, description:'Descripcion de Zapatillas Reebok'}
    
]

export const getProducts = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}

export const getProduct = (id) => {
    return new Promise ((resolve, reject) => {
        setTimeout(() =>{
            resolve (products.find(prod => prod.id === id))
        }, 1500)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 1000)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 1000)
    })
}