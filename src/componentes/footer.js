import React from "react";

function Footer() {
    return (
        <div class="text-center">
            <button class="btn btn-outline-primary mt-2 mb-2" type="submit">Boton de Bootstrap</button>
        <div class="card text-center d-flex ">
            <div class="card-header">
                Numero
            </div>
            <div class="card-body">
                <p class="card-text">Celular: 09651032169.</p>
                <p class="card-text">Telefono: 03 02532169.</p>
            </div>
            <div class="card-header">
                Dirección
            </div>
            <div class="card-body">
                <p class="card-text">Ladron de Guevara, EPN</p>
            </div>
            
            <div class="card-footer text-body-secondary">
                Copyright 2024. Todos los derechos reservados
            </div>
        </div>
        </div>
    )

}
export default Footer