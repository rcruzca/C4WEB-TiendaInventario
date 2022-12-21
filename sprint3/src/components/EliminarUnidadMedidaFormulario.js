import axios from "axios"
import { useEffect, useState } from "react"
import Form from 'react-bootstrap/Form';
import { UNIDADESMEDIDASCREADOS_GET_ENDPOINT } from "../connections/endpoints"
import { BotonEliminar } from "./BotonEliminar";
import { ELIMINARUNIDADMEDIDA_DELETE_ENDPOINT } from "../connections/endpoints";
import FormLabel from "react-bootstrap/esm/FormLabel";

function EliminarUnidadMedidaFormulario(){
    const[unidadMedidaId,setUnidadMedida]=useState("")
   

   
    

    const [unidadesMedidas,setUnidadesMedidas]=useState([])
    useEffect(()=>{
        axios.get(UNIDADESMEDIDASCREADOS_GET_ENDPOINT)
        .then(respuesta=>{
        setUnidadesMedidas(respuesta.data)
        })
        .catch(err=>{
        console.error(err)
        })
    },[])


    return (
       <Form>
        <Form.Group className="mb-3" controlId="unidadMedida">
        <FormLabel></FormLabel>
        <Form.Control as="select" type="select" required
        value={unidadMedidaId} onChange={e=>setUnidadMedida(e.target.value)} >
           {unidadesMedidas.map(elemento=>
                <option value={elemento.id}   key={elemento.id}>{elemento.nombre}</option>
            )}
        </Form.Control>
      </Form.Group>
      <BotonEliminar id={unidadMedidaId} nombre="" endpoint={ELIMINARUNIDADMEDIDA_DELETE_ENDPOINT} />
      
       </Form>
        
       
    
        
    )
}

export{EliminarUnidadMedidaFormulario}