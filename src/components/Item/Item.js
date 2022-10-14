import { useNavigate } from "react-router-dom"

const Item = ({ img, name, category, price, id}) => {
    const navigate = useNavigate()
    return (

        <div id="productoss">
            <img src={img} alt={name} style={{width:100}}/>
            <h1>{name}</h1>
            <h3 className="textoDetalle">{category}</h3>
            <p className="textoDetalle">${price}</p>
            <button onClick={() => navigate(`/detail/${id}`)} className="botonVerDetalle">Ver detalles</button>
        </div>
    )
}
export default Item