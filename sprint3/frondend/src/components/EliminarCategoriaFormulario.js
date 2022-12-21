import axios from "axios"
import { useEffect, useState } from "react"
import Form from 'react-bootstrap/Form';
import { CATEGORIASCREADOS_GET_ENDPOINT } from "../connections/endpoints"
import { BotonEliminar } from "./BotonEliminar";
import { ELIMINARCATEGORIA_DELETE_ENDPOINT } from "../connections/endpoints";
import FormLabel from "react-bootstrap/esm/FormLabel";

function EliminarCategoriaFormulario(){
    const[categoriaId,setCategoria]=useState("")
   

   
    

    const [categorias,setCategorias]=useState([])
    useEffect(()=>{
        axios.get(CATEGORIASCREADOS_GET_ENDPOINT)
        .then(respuesta=>{
        setCategorias(respuesta.data)
        })
        .catch(err=>{
        console.error(err)
        })
    },[])


    return (
       <Form>
        <Form.Group className="mb-3" controlId="categoria">
        <FormLabel></FormLabel>
        <Form.Control as="select" type="select" required
        value={categoriaId} onChange={e=>setCategoria(e.target.value)} >
           {categorias.map(elemento=>
                <option value={elemento.id}   key={elemento.id}>{elemento.nombre}</option>
            )}
        </Form.Control>
      </Form.Group>
      <BotonEliminar id={categoriaId} nombre="" endpoint={ELIMINARCATEGORIA_DELETE_ENDPOINT} />
      
       </Form>
        
       
    
        
    )
}

export {EliminarCategoriaFormulario}