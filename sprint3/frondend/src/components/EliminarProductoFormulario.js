import axios from "axios"
import { useEffect, useState } from "react"
import Form from 'react-bootstrap/Form';
import { PRODUCTOSCREADOS_GET_ENDPOINT } from "../connections/endpoints"
import { BotonEliminar } from "./BotonEliminar";
import { ELIMINARPRODUCTO_DELETE_ENDPOINT } from "../connections/endpoints";
import FormLabel from "react-bootstrap/esm/FormLabel";

function EliminarProductoFormulario(){
    const[productoId,setProducto]=useState("")
   

   
    

    const [productos,setProductos]=useState([])
    useEffect(()=>{
        axios.get(PRODUCTOSCREADOS_GET_ENDPOINT)
        .then(respuesta=>{
        setProductos(respuesta.data)
        })
        .catch(err=>{
        console.error(err)
        })
    },[])


    return (
       <Form>
        <Form.Group className="mb-3" controlId="producto">
            <FormLabel></FormLabel>
        <Form.Control as="select" type="select" required
        value={productoId} onChange={e=>setProducto(e.target.value)} >
           {productos.map(elemento=>
                <option value={elemento.id}   key={elemento.id}>{elemento.nombre}</option>
            )}
        </Form.Control>
      </Form.Group>
      <BotonEliminar id={productoId} nombre="" endpoint={ELIMINARPRODUCTO_DELETE_ENDPOINT} />
      
       </Form>
        
       
    
        
    )
}

export {EliminarProductoFormulario}