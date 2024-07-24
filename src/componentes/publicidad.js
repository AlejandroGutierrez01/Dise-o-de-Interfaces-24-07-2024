import React from "react";
import img from './imagenes/images.jpg';
import './estilos/estilo.css';
function Publicidad() {
    return (
        <div className="div_publi">
            <img src={img} className="img_publi" alt="img" />
            <p className="p_publi">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam repellat aliquam vero, officiis molestias earum, eveniet rerum voluptatem excepturi porro repudiandae ea praesentium aut minima provident, molestiae commodi ducimus neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam repellat aliquam vero, officiis molestias earum, eveniet rerum voluptatem excepturi porro repudiandae ea praesentium aut minima provident, molestiae commodi ducimus neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam repellat aliquam vero, officiis molestias earum, eveniet rerum voluptatem excepturi porro repudiandae ea praesentium aut minima provident, molestiae commodi ducimus neque.</p>
        </div>
    );
};
export default Publicidad;