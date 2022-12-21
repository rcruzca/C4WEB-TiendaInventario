import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { PRODUCTOSCREADOS_GET_ENDPOINT } from "../connections/endpoints";

function CrearInventarioFormulario({ callback }) {
  const [cantidadStock, setCantidadStock] = useState("");
  const [cantidadMaxima, setCantidadMaxima] = useState("");
  const [cantidadMinima, setCantidadMinima] = useState("");
  const [precioCosto, setPrecioCosto] = useState("");
  const [precioVenta, setPrecioVenta] = useState("");
  const [productoId, setProductoId] = useState("");

  const enviarFormulario = (e) => {
    e.preventDefault();
    callback({
      cantidadStock,
      cantidadMaxima,
      cantidadMinima,
      precioCosto,
      precioVenta,
      productoId: { id: productoId },
    });
  };

  const [productos, setProductos] = useState([]);
  useEffect(() => {
    axios
      .get(PRODUCTOSCREADOS_GET_ENDPOINT)
      .then((respuesta) => {
        setProductos(respuesta.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <Form onSubmit={enviarFormulario} className="d-flex">
      <Form.Group
        className="mb-2 p-1"
        controlId="productoID"
        style={{ width: "18rem" }}
      >
        <Form.Label>Producto</Form.Label>
        <Form.Control
          as="select"
          type="select"
          required
          value={productoId}
          onChange={(e) => setProductoId(e.target.value)}
        >
          <option value="">Seleccione</option>
          {productos.map((elemento) => (
            <option value={elemento.id} key={elemento.id}>
              {elemento.nombre}
            </option>
          ))}
        </Form.Control>
      </Form.Group>

      <Form.Group className="mb-2 p-1" controlId="stock">
        <Form.Label>Cantidad en Stock </Form.Label>
        <Form.Control
          type="text"
          placeholder="c. stock"
          required
          value={cantidadStock}
          onChange={(e) => setCantidadStock(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-2 p-1" controlId="cmaximo">
        <Form.Label>Cantidad Máxima </Form.Label>
        <Form.Control
          type="text"
          placeholder="c. maximo"
          required
          value={cantidadMaxima}
          onChange={(e) => setCantidadMaxima(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-2 p-1" controlId="cminima">
        <Form.Label>Cantidad Mínima </Form.Label>
        <Form.Control
          type="text"
          placeholder="c. mínima"
          required
          value={cantidadMinima}
          onChange={(e) => setCantidadMinima(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-2 p-1" controlId="costo">
        <Form.Label>Costo producto </Form.Label>
        <Form.Control
          type="text"
          placeholder="costo"
          required
          value={precioCosto}
          onChange={(e) => setPrecioCosto(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-2 p-1" controlId="precio">
        <Form.Label>Precio de venta </Form.Label>
        <Form.Control
          type="text"
          placeholder="precio"
          required
          value={precioVenta}
          onChange={(e) => setPrecioVenta(e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export { CrearInventarioFormulario };
