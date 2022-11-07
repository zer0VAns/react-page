import { useContext } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Context } from "../../App"

const Item = ({ img, name, category, price, id}) => {
    const navigate = useNavigate()
    return (
    <Link to={`/detail/${id}`} className="separacionProductos">
        <div id="productoss">
            <div id="productosS">
            <img src={img} alt={name} style={{width:100}}/>
            <h1>{name}</h1>
            <h3 className="textoDetalle">{category}</h3>
            <p className="textoDetalle">${price}</p>
            <button onClick={() => navigate(`/detail/${id}`)} className="botonVerDetalle">Ver detalles</button>
            </div>
        </div>
        </Link>
    )
}
export default Item