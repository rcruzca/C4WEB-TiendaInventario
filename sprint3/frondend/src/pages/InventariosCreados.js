import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { INVENTARIOSCREADOS_GET_ENDPOINT } from '../connections/endpoints';
import { CREARINVENTARIO_POST_ENDPOINT } from '../connections/endpoints';
import { useEffect, useState } from 'react';
import { ProductoCard } from '../components/ProductoCard';
import { useNavigate } from 'react-router-dom';
import { CrearInventarioFormulario } from '../components/CrearInventarioFormulario';

function InventariosCreados() {
  const navegar=useNavigate()
    const [inventarios,setInventarios]=useState([])
    useEffect(()=>{
        

        axios.get(INVENTARIOSCREADOS_GET_ENDPOINT)
        .then(respuesta=>{
        console.log(respuesta.data)
        setInventarios(respuesta.data)
        })
        .catch(err=>{
        console.error(err)
        })

    },[])

    const crearInventario=(inventario)=>{

      axios.post(CREARINVENTARIO_POST_ENDPOINT,inventario)
      .then(respuesta=>{
      console.log(respuesta.data)
      navegar("/")
      })
      .catch(err=>{
      console.error(err)
      })
    
    }
    

  return (
    <Container className='mt-1 mb-1 text-center'>
      <h3>Crear Inventario</h3>
  <Row className="justify-content-center align-content-center">
    <Col sm="lh">
    <Row  >
        <CrearInventarioFormulario   callback={crearInventario}/>
        </Row>
    </Col>
  </Row><br></br>
        <h3>Productos</h3>
      <Row className="justify-content-center">
        <Col sm="12">
        <Row className="justify-content-center">
            {inventarios.map(inventario=>
                <ProductoCard key={inventario.id} inventario={inventario}/>
            )}
            </Row>
        </Col>
      </Row>
    </Container>
  );
}

export {InventariosCreados};