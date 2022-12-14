
const productos = [
    {
        id: '1', name: 'Imperial Golden', price: '5000ars', category: 'Bebida', img: 'https://d2r9epyceweg5n.cloudfront.net/stores/002/103/313/products/947-imperial-golden-lata-24x473-cc1-c9df4b86d923b05c9516547804894905-1024-1024.png', stock: 3, description: 'Imperial Golden es una cerveza rubia edición limitada, de contextura suave y con sabor muy refrescante'
    },
    {
        id: '2', name: 'Imperial Cream Stout', price: '320ars', category: 'Bebida', img: 'https://d2r9epyceweg5n.cloudfront.net/stores/001/108/127/products/imperial-cream-stout-latabyb1-fba8cf2f2767a6203515970248438529-1024-1024.png', stock: 32, description: 'Imperial Cream Stout, una cerveza especial y distinguida. De un profundo color oscuro, con aromas a tostado y a café. Presenta un exquisito sabor intenso y un cuerpo y espuma cremosa.'
    },
    {
        id: '3', name: 'Imperial Amber Lager', price:'500ars', category:'Bebida', img: 'https://ardiaprod.vtexassets.com/arquivos/ids/226921/Cerveza-Imperial-Amber-Lager-lata-473-Ml-_1.jpg?v=637920205547030000', stock:20, description:'Es una cerveza con una combinación de lúpulos patagónicos y un blend de finas maltas que generan su color rojizo, un delicado aroma y un amargor apacible que permite dar a luz a un tostado delicioso.'
    },
    {
        id: '4', name: 'Lays', price:'200ars', category:'Snack', img: 'https://www.matildaexpress.com.ar/wp-content/uploads/2021/07/PAPAS-FRITAS-LAYS-CLASICAS-X90G.png', stock:20, description:'Todo empieza con papas de campo, que se cocinan y condimentan a la perfección para que cada LAYS tenga una crocantes insuperable y rebose del sabor a papa fresca. '
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        })
    }
    )
}

export const getProductById = (id) => {
    return new Promise (resolve => {
        setTimeout(() =>{
            resolve(productos.find(prod => {
                return prod.id === id
            }))
        })
    })
}
export const getProductsByCategory = (categoryId) => {
    return new Promise (resolve => {
        setTimeout (() => {
            resolve(productos.filter(prod => prod.category === categoryId))
        })
    })
}