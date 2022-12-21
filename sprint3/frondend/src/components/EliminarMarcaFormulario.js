import axios from "axios";
import { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import { MARCASCREADOS_GET_ENDPOINT } from "../connections/endpoints";
import { BotonEliminar } from "./BotonEliminar";
import { ELIMINARMARCA_DELETE_ENDPOINT } from "../connections/endpoints";
import FormLabel from "react-bootstrap/esm/FormLabel";

function EliminarMarcaFormulario() {
  const [marcaId, setMarca] = useState("");

  const [marcas, setMarcas] = useState([]);
  useEffect(() => {
    axios
      .get(MARCASCREADOS_GET_ENDPOINT)
      .then((respuesta) => {
        setMarcas(respuesta.data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <Form>
      <Form.Group className="mb-3" controlId="marca">
        <FormLabel></FormLabel>
        <Form.Control
          as="select"
          type="select"
          required
          value={marcaId}
          onChange={(e) => setMarca(e.target.value)}
        >
          {marcas.map((elemento) => (
            <option value={elemento.id} key={elemento.id}>
              {elemento.nombre}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <BotonEliminar
        id={marcaId}
        nombre=""
        endpoint={ELIMINARMARCA_DELETE_ENDPOINT}
      />
    </Form>
  );
}

export { EliminarMarcaFormulario };
