import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { CREARPRODUCTO_POST_ENDPOINT } from '../connections/endpoints';
import { CREARMARCA_POST_ENDPOINT } from '../connections/endpoints';
import { CREARCATEGORIA_POST_ENDPOINT } from '../connections/endpoints';
import { CREARUNIDADMEDIDA_POST_ENDPOINT } from '../connections/endpoints';
import {  useNavigate } from 'react-router-dom';
import { CrearProductoFormulario } from '../components/CrearProductoFormulario';
import { CrearMarcaFormulario } from '../components/CrearMarcaFormulario';
import { CrearUnidadMedidaFormulario } from '../components/CrearUnidadMedidaFormulario';
import { EliminarUnidadMedidaFormulario } from '../components/EliminarUnidadMedidaFormulario';
import { CrearCategoriaFormulario } from '../components/CrearCategoriaFormulario';
import { EliminarCategoriaFormulario } from '../components/EliminarCategoriaFormulario';
import { EliminarMarcaFormulario } from '../components/EliminarMarcaFormulario';
import { EliminarProductoFormulario } from '../components/EliminarProductoFormulario';
import axios from 'axios';
import FormGroup from 'react-bootstrap/esm/FormGroup';

function CrearProducto() {
  const navegar=useNavigate()

  const crearProducto=(producto)=>{
    console.log(producto)

    axios.post(CREARPRODUCTO_POST_ENDPOINT,producto)
    .then(respuesta=>{
    console.log(respuesta.data)
    navegar("/")
    })
    .catch(err=>{
    console.error(err)
    
    })

}

const crearMarca=(marca)=>{

  axios.post(CREARMARCA_POST_ENDPOINT,marca)
  .then(respuesta=>{
  console.log(respuesta.data)
  navegar("/")
  })
  .catch(err=>{
  console.error(err)
  })

}


const crearCategoria=(categoria)=>{

  axios.post(CREARCATEGORIA_POST_ENDPOINT,categoria)
  .then(respuesta=>{
  console.log(respuesta.data)
  navegar("/")
  })
  .catch(err=>{
  console.error(err)
  })

}

const crearUnidadMedida=(unidadMedida)=>{

  axios.post(CREARUNIDADMEDIDA_POST_ENDPOINT,unidadMedida)
  .then(respuesta=>{
  console.log(respuesta.data)
  navegar("/")
  })
  .catch(err=>{
  console.error(err)
  })

}

return (
  
<Container className='mt-3 mb-3 text-center '>
<FormGroup className='d-flex-inline justify-content-around'>
    <div>
    <h3>Crear Producto</h3>
  <Row className="justify-content-center align-content-center">
    <Col sm="12">
    <Row className="justify-content-center">
        <CrearProductoFormulario callback={crearProducto}/>
        </Row>
    </Col>
  </Row><br></br>
  </div>
  <div>
  <h3>Eliminar Producto</h3>
  <Row className="justify-content-center">
    <Col sm="12">
    <Row className="justify-content-center">
        <EliminarProductoFormulario></EliminarProductoFormulario>
        </Row>
    </Col>
  </Row>
  </div>
  </FormGroup>
  <FormGroup className='d-flex justify-content-around'>
    <div>
  <h3>Crear Marca</h3>
  <Row className="justify-content-center">
    <Col sm="12">
    <Row className="justify-content-center">
        <CrearMarcaFormulario callback={crearMarca}/>
        </Row>
    </Col>
  </Row><br></br>
  </div>
  <div>
  <h3>Eliminar Marca</h3>
  <Row className="justify-content-center">
    <Col sm="12">
    <Row className="justify-content-center">
        <EliminarMarcaFormulario></EliminarMarcaFormulario>
        </Row>
    </Col>
  </Row>
  </div>
  </FormGroup>
  
  <FormGroup className='d-flex justify-content-around'>
    <div>
  <h3>Crear Categoria</h3>
  <Row className="justify-content-center">
    <Col sm="12">
    <Row className="justify-content-center">
        <CrearCategoriaFormulario callback={crearCategoria}/>
        </Row>
    </Col>
  </Row><br></br>
  </div>
  <div>
  <h3>Eliminar Categoria</h3>
  <Row className="justify-content-center">
    <Col sm="12">
    <Row className="justify-content-center">
        <EliminarCategoriaFormulario></EliminarCategoriaFormulario>
        </Row>
    </Col>
  </Row>
  </div>
  </FormGroup>
  <FormGroup className='d-flex justify-content-around'>
    <div>
  <h3>Crear Unidad de Medida</h3>
  <Row className="justify-content-center">
    <Col sm="12">
    <Row className="justify-content-center">
        <CrearUnidadMedidaFormulario callback={crearUnidadMedida}/>
        </Row>
    </Col>
  </Row>
  </div>
  <div>
  <h3>Eliminar Unidad de Medida</h3>
  <Row className="justify-content-center">
    <Col sm="12">
    <Row className="justify-content-center">
        <EliminarUnidadMedidaFormulario></EliminarUnidadMedidaFormulario>
        </Row>
    </Col>
  </Row>
  </div>
  </FormGroup>
  
</Container>
);
}

export {CrearProducto};