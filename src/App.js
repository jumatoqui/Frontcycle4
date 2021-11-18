import React, {Fragment, useState, useEffect} from 'react';
import Navbar from './Components/Navbar'
import ProductList from './Components/ProductList'
import Form from './Components/Form'
import ReactSelectCategoria from './Components/ReactSelectCategoria'
import ReactSelectNombre from './Components/ReactSelectNombre'
import ReactSelectPrecio from './Components/ReactSelectPrecio'



function App() {

  const [product, setProduct] = useState({
    categoria: '',
    nombre: '',
    descripcion: '',
    precio: '',
    disponibilidad: '',
    cantidad: 0,
    imagen: ''
  })

  const [products, setProducts] = useState([])

  const [listUpdated, setListUpdated] = useState(false)

  useEffect(() => {
    const getProducts = () => {
      fetch('http://localhost:8080/api/productos/all')
      .then(res => res.json())
      .then(res => setProducts(res))
    }
    getProducts()
    setListUpdated(false)
  }, [listUpdated])

  useEffect(()=>{},[product, products])


  return (
    <Fragment>
      <Navbar brand='Catalogo Productos'/>
      <div className="container">
        <div className="row">
          <div className="col-10">
            <h2 style={{textAlign: 'center'}}>LISTA PRODUCTOS</h2>
            <ProductList product={product} setProduct={setProduct} products={products} setListUpdated={setListUpdated}/>
          </div>
          <div className="col-4">
            <h2 style={{textAlign: 'center'}}>REGISTRO PRODUCTOS</h2>
            <Form product={product} setProduct={setProduct}/>
          </div>
          <div className="col-2">
            {<ReactSelectCategoria products={products} updateProducts={setProducts}>{product.categoria}</ReactSelectCategoria>}
          </div>
          <div className="col-2">
            {/* <ReactSelectNombre key={product.id} value={product.id}>{product.nombre}</ReactSelectNombre> */}
          </div>
          <div className="col-2">
            {/* <ReactSelectPrecio key={product.id} value={product.id}>{product.precio}</ReactSelectPrecio> */}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;