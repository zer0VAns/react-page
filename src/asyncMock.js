
const productos = [
    {
        id: '1', name: 'Cerveza rubia', price: '300ars', category: 'bebida', img: 'https://i.imgur.com/cSLG7G7.jpg', stock: 47, description: 'La mejor cerveza de la historia'
    },
    {
        id: '2', name: 'Cerveza negra', price: '320ars', category: 'bebida', img: 'https://i.imgur.com/7TRd0pV.jpg', stock: 32, description: 'La segunda mejor cerveza de la historia'
    },
    {
        id: '3', name: 'Cerveza Ambar', price:'500ars', category:'bebida', img: 'https://i.imgur.com/h1TzuIN.jpg', stock:20, description:'La tercer mejor cerveza de la historia'
    }
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 1000)
    }
    )
}