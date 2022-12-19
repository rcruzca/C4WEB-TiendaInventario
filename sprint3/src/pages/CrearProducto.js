import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CREARPRODUCTO_POST_ENDPOINT } from '../connections/endpoints';
import { useNavigate } from 'react-router-dom';
import { CrearProductoFormulario } from '../components/CrearProductoFormulario';
import axios from 'axios';

function CrearProducto() {
  const navegar=useNavigate()

  const crear=(producto)=>{

    axios.post(CREARPRODUCTO_POST_ENDPOINT,producto)
    .then(respuesta=>{
    console.log(respuesta.data)
    navegar("/")
    })
    .catch(err=>{
    console.error(err)
    })

}


return (
<Container className='mt-3 mb-3 text-center'>
    <h3>Crear Producto</h3>
  <Row className="justify-content-center">
    <Col sm="12">
    <Row className="justify-content-center">
        <CrearProductoFormulario/>
        </Row>
    </Col>
  </Row>
</Container>
);
}

export {CrearProducto};