import './ItemDetail.css'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const ItemDetail = ({ id, nombre, precio, img, stock }) => {

  //1) Creamos un estado con la cantidad de productos agregados. 

  const [agregarCantidad, setAgregarCantidad] = useState(0);

  //2) Creamos una función manejadora de la cantidad: 

  const manejadorCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);
    console.log("Productos agregados: " + cantidad);
  }

  return (
    <div className='contenedorItem'>
      <h2>Nombre: {nombre} </h2>
      <h3>Precio: {precio} </h3>
      <h3> ID: {id} </h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam iste reiciendis tempora unde! Quam commodi esse dicta odit nobis, enim, accusamus corrupti veritatis, excepturi aliquam laudantium? Veritatis ex sapiente deserunt.</p>
      <img src={img} alt={nombre} />
      {
        //Acá empleamos la lógica del montaje y desmontaje de componentes. 
      }

      {
        agregarCantidad > 0 ? (<Link to="/cart"> Terminar compra </Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={manejadorCantidad} />)
      }
    </div>
  )
}

export default ItemDetail

