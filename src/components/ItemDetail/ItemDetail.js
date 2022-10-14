

const ItemDetail = ({id,name,price,category,img,stock,description}) =>{
    return (
        <div>
            <img src={img} alt={name} style={{width:100}}/>
            <h2 id="nombreDetalle">{name}</h2>
            <p className="textoDetalle sizeTexto">Precio: ${price}</p>
            <p className="textoDetalle sizeTexto">Descripcion: {description}</p>
            <p className="textoDetalle sizeTexto">Stock: {stock} unidades</p>
        </div>
    )
}

export default ItemDetail