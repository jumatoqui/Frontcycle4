import React from 'react';

const Form = ({product, setProduct,}) => {

    const handleChange = e => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        })
    }

    let{categoria, nombre, descripcion, precio, disponibilidad, cantidad, imagen} = product

    const handleSubmit = (e) => {
        //e.preventDefault();
        cantidad = parseInt(cantidad, 10)
        //validación de los datos
        if (categoria === '' || nombre === '' || descripcion === '' || precio === '' || cantidad <= 0 || imagen === '' ) {
            alert('Todos los campos son obligatorios')
            return
        }
        //consulta
        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(product)
        }
        fetch('http://localhost:8080/api/productos/save', requestInit)
        .then(res => res.text())
        .then(res => console.log(res))
        .catch(res => console.log(res))

        //reiniciando state de libro
        setProduct({
            categoria: '',
            nombre: '',
            descripcion: '',
            precio: '',
            disponibilidad: true,
            cantidad: 0,
            imagen: ''
        })



    }

    const handleUpdate = id => {
        
        cantidad = parseInt(cantidad, 10)
        //validación de los datos
        if (categoria === '' || nombre === '' || descripcion === '' || precio === '' || disponibilidad === '' || cantidad <= 0 || imagen === '' ) {
            alert('Todos los campos son obligatorios')
            return
        }
        const requestInit = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(product)
        }
        fetch('http://localhost:8080/api/productos/update', requestInit)
        .then(res => res.text())
        .then(res => console.log(res))
        .catch(res => console.log(res))

        //reiniciando state de libro
        setProduct({
            categoria: '',
            nombre: '',
            descripcion: '',
            precio: '',
            disponibilidad: '',
            cantidad: 0,
            imagen: ''
        })

        //setListUpdated(true)
    }


    return ( 
        <form onSubmit={handleSubmit}>
            <div className="ml-1">
                <label htmlFor="categoria" className="form-label">CATEGORIA</label>
                <input value={categoria} name="categoria" onChange={handleChange} type="text" id="categoria" className="form-control"/>
            </div>
            <div className="ml-1">
                <label htmlFor="nombre" className="form-label">NOMBRE</label>
                <input value={nombre} name="nombre" onChange={handleChange} type="text" id="nombre" className="form-control"/>
            </div>
            <div className="ml-1">
                <label htmlFor="descripcion" className="form-label">DESCRIPCION</label>
                <input value={descripcion}  name="descripcion" onChange={handleChange} type="text" id="descripcion" className="form-control"/>
            </div>
            <div className="ml-1">
                <label htmlFor="precio" className="form-label">PRECIO</label>
                <input value={precio} name="precio" onChange={handleChange} type="number" id="precio" className="form-control"/>
            </div>
            <div className="ml-1">
                <label htmlFor="disponiblidad" className="form-label">DISPONIBILIDAD</label>
                <input value={disponibilidad}  name="disponibilidad" onChange={handleChange} type="text" id="disponibilidad" className="form-control"/>
            </div>
            <div className="ml-1">
                <label htmlFor="cantidad" className="form-label">CANTIDAD</label>
                <input value={cantidad}  name="cantidad" onChange={handleChange} type="number" id="cantidad" className="form-control"/>
            </div>
            <div className="ml-1">
                <label htmlFor="imagen" className="form-label">IMAGEN</label>
                <input value={imagen}  name="imagen" onChange={handleChange} type="text" id="imagen" className="form-control"/>
            </div>
            <button type="submit" className="btn btn-primary">Enviar</button>
            <button type="button" onClick={() => handleUpdate(product.id)} className="btn btn-primary">Actualizar</button>
        </form>
    );
}
 
export default Form;