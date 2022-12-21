import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {  useState } from 'react';
import {  useEffect } from 'react';
import axios from 'axios';
import { MARCASCREADOS_GET_ENDPOINT } from '../connections/endpoints';
import { CATEGORIASCREADOS_GET_ENDPOINT } from '../connections/endpoints';
import { UNIDADESMEDIDASCREADOS_GET_ENDPOINT } from '../connections/endpoints';

function CrearProductoFormulario({callback}) {
const [nombre,setNombre]=useState("")
const [imagen, setImagen]=useState("")
const[marcaId,setMarca]=useState("")
const[categoriaId,setCategoria]=useState("")
const[unidadMedidaId,setUnidadMedida]=useState("")


const enviarFormulario=(e)=>{
  e.preventDefault()
  callback({nombre,imagen,marcaId:{id:marcaId},categoriaId:{id:categoriaId},unidadMedidaId:{id:unidadMedidaId}}) 
}
const [marcas,setMarcas]=useState([])
    useEffect(()=>{
        axios.get(MARCASCREADOS_GET_ENDPOINT)
        .then(respuesta=>{
        setMarcas(respuesta.data)
        })
        .catch(err=>{
        console.error(err)
        })
    },[])
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
    <Form onSubmit={enviarFormulario} className="d-flex justify-content-around">
      <Form.Group className="m-1" controlId="titulo">
        <Form.Label>Nombre del Producto</Form.Label>
        <Form.Control type="text" placeholder="ingrese nombre del producto" required
         value={nombre} onChange={e=>setNombre(e.target.value)} /> 
      </Form.Group>

      <Form.Group className="m-1" controlId="imagen">
        <Form.Label>Imagen</Form.Label>
        <Form.Control type="url" placeholder="ingrese la url de la imagen" required
        value={imagen} onChange={e=>setImagen(e.target.value)}/>
      </Form.Group>

      <Form.Group className="m-1" controlId="marca">
        <Form.Label>Marca</Form.Label>
        <Form.Control as="select" type="select" required
        value={marcaId} onChange={e=>setMarca(e.target.value)}>
          <option value="">Seleccione</option>
           {marcas.map(elemento=>
                <option value={elemento.id} key={elemento.id}>{elemento.nombre}</option>
            )}
        </Form.Control>
      </Form.Group>
     
      <Form.Group className="m-1" controlId="categoria">
        <Form.Label>Categoria</Form.Label>
        <Form.Control as="select" type="select" required
        value={categoriaId} onChange={e=>setCategoria(e.target.value)}>
          <option value="">Seleccione</option>
           {categorias.map(elemento=>
                <option value={elemento.id} key={elemento.id}>{elemento.nombre}</option>
            )}
        </Form.Control>
      </Form.Group>

      <Form.Group className="m-1" controlId="unidadMedida">
        <Form.Label>Unidad de Medida</Form.Label>
        <Form.Control as="select" type="select" required
        value={unidadMedidaId} onChange={e=>setUnidadMedida(e.target.value)}>
          <option value="">Seleccione</option>
           {unidadesMedidas.map(elemento=>
                <option value={elemento.id} key={elemento.id}>{elemento.nombre}</option>
            )}
        </Form.Control>
      </Form.Group>
   


      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}
export {CrearProductoFormulario};