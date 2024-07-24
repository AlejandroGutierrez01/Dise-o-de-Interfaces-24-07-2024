import React from "react";
function ProductCard({ foto, descripcion, precio }) {
    return(
        <div className="product-card">
            <img src={foto} alt="Producto" className="product-photo"/>
            <p className="product-description" >{descripcion} </p>
            <p>{precio}</p>
        </div>
    )
}
export default ProductCard;