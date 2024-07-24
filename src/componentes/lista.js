import React from "react";
function Lista() {
    const items=["Manzana","Coso","idk","mora","pera","platano","queso","si"]
    return(
        <div>
            <h1>Mi lista</h1>
            <ul>
                {items.map((items, index) => (
                    <li key={index}> {items} </li>
                ))} 
            </ul>
            <h1>Otra lista </h1>
            <ul>
                <li>a</li>
                <li>a</li>
                <li>a</li>
                <li>a</li>
            </ul>
        </div>
    )
}
export default Lista