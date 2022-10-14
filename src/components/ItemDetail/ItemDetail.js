

const ItemDetail = ({id,name,price,category,img,stock,description}) =>{
    return (
        <div>
            <img src={img} alt={name} style={{width:100}}/>
            <h2>{name}</h2>
            <p>price: ${price}</p>
            <p>description: {description}</p>
            <p>stock: {stock} unidades</p>
        </div>
    )
}

export default ItemDetail