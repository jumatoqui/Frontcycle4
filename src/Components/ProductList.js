import React from 'react';

const ProductList = ({product, setProduct, products, setListUpdated}) => {


    const handleDelete = id => {
       
        const requestInit = {
            method: 'DELETE'
        }
        fetch('http://localhost:8080/api/productos/' + id, requestInit)
        .then(res => res.text())
        .then(res => console.log(res))
        .catch(res => console.log(res))

        setListUpdated(true)
    }


    let catchProduct=(product)=>{
        fetch('http://localhost:8080/api/productos/' + product)
        .then(res => res.json())
        .then(res => setProduct(res))
        .catch(res => console.log(res))
    }
   
    return ( 
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>CATEGORIA</th>
                    <th>NOMBRE</th>
                    <th>DESCRIPCION</th>
                    <th>PRECIO</th>
                    <th>DISPONIBILIDAD</th>
                    <th>CANTIDAD</th>
                    <th>IMAGEN</th>
                </tr>
            </thead>
            <tbody>
                {products.map(product => (
                    <tr key={product.id}>
                        <td>{product.id}</td>
                        <td>{product.categoria}</td>
                        <td>{product.nombre}</td>
                        <td>{product.descripcion}</td>
                        <td>{product.precio}</td>
                        <td>{product.disponibilidad}</td>
                        <td>{product.cantidad}</td>
                        <td>{product.imagen}</td>
                        <td>
                            <div className="mb-1">
                                <button onClick={() => handleDelete(product.id)} className="btn btn-danger">Borrar</button>
                            </div>
                            <div className="mb-1">
                                <button onClick={() => catchProduct(product.id)} className="btn btn-green">Editar</button>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}
 
export default ProductList;
