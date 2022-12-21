import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import { INVENTARIOSCREADOS_GET_ENDPOINT } from "../connections/endpoints";
import { ELIMINARINVENTARIO_DELETE_ENDPOINT } from "../connections/endpoints";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import { useParams } from "react-router-dom";
import { BotonEliminar } from "../components/BotonEliminar";

function ProductosDetalle() {
  const [inventario, setInventario] = useState();
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`${INVENTARIOSCREADOS_GET_ENDPOINT}/${id}`)
      .then((respuesta) => {
        console.log(respuesta.data);
        setInventario(respuesta.data);
      })
      .catch((err) => {
        console.error(err);
        
      });
  }, [id]);

  return (
    <Container className="mt-3 mb-3 text-center">
      <h3>Detalles</h3>
      <Row className="justify-content-center ">
        <Col sm="12">
          {inventario && (
            <Card className="d-inline-flex w-25">
              <Card.Img variant="top" src={inventario.productoId.imagen} />
              <Card.Body>
                <Card.Title>{inventario.productoId.nombre}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Marca: {inventario.productoId.marcaId.nombre}
                  <br></br>
                  Categoria: {inventario.productoId.categoriaId.nombre}
                  <br></br>
                  Unidad de Medida:{" "}
                  {inventario.productoId.unidadMedidaId.nombre}
                </Card.Subtitle>
                <Card.Text>
                  Precio de venta: ${inventario.precioVenta}
                  <br></br>
                  Costo: $ {inventario.precioCosto}
                  <br></br>
                  Unidades Disponibles: {inventario.cantidadStock}
                  <br></br>
                  Unidades Minimas: {inventario.cantidadMinima}
                  <br></br>
                  Unidades Maximas: {inventario.cantidadMaxima}
                </Card.Text>
                <BotonEliminar
                  id={inventario.id}
                  nombre={inventario.productoId.nombre}
                  endpoint={ELIMINARINVENTARIO_DELETE_ENDPOINT}
                />
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export { ProductosDetalle };
