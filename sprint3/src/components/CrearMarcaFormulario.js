import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
function CrearMarcaFormulario({ callback }) {
  const [nombre, setNombre] = useState("");

  const enviarFormulario = (e) => {
    e.preventDefault();
    callback({ nombre });
  };

  return (
    <Form onSubmit={enviarFormulario}>
      <Form.Group className="mb-3" controlId="titulo">
        <Form.Label>Nombre de la Marca</Form.Label>
        <Form.Control
          type="text"
          placeholder="ingrese marca de producto"
          required
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export { CrearMarcaFormulario };
