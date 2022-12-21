import axios from "axios";
import Button from "react-bootstrap/esm/Button";
import { useNavigate } from "react-router-dom";

const BotonEliminar = ({ id, nombre, endpoint }) => {
  const navegar = useNavigate();
  const eliminar = async () => {
    axios
      .delete(`${endpoint}/${id}`)
      .then((respuesta) => {
        navegar("/");
      })
      .catch((err) => {
        console.error(err);
      });
  };
  const crearAlerta = () => {
    const titulo = `Eliminar  \n ¿desea eliminar el item ${nombre}?`;
    return window.confirm(titulo) === true ? eliminar() : () => {};
  };
  return (
    <Button variant="danger" size="sm" type="submit" onClick={crearAlerta}>
      Eliminar{" "}
    </Button>
  );
};

export { BotonEliminar };
