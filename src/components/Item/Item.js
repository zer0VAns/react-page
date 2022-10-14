import { useNavigate } from "react-router-dom"

const Item = ({ img, name, category, price, id}) => {
    const navigate = useNavigate()
    return (

        <div id="productoss">
            <img src={img} alt={name} style={{width:100}}/>
            <h1>{name}</h1>
            <h3>{category}</h3>
            <p>{price}</p>
            <button onClick={() => navigate(`/detail/${id}`)}>Ver detalle</button>
        </div>
    )
}
export default Item