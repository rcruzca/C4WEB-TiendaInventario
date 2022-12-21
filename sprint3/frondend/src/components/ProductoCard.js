import Card from "react-bootstrap/Card";
import { NavLink } from "react-router-dom";
function ProductoCard({ inventario }) {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={inventario.productoId.imagen} />
      <Card.Body>
        <Card.Title>
          <NavLink to={`/inventario/${inventario.id}`}>
            {inventario.productoId.nombre}
          </NavLink>
        </Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Marca: {inventario.productoId.marcaId.nombre}
          <br></br>
          Categoria: {inventario.productoId.categoriaId.nombre}
          <br></br>
          Unidad de Medida: {inventario.productoId.unidadMedidaId.nombre}
        </Card.Subtitle>
      </Card.Body>
    </Card>
  );
}

export { ProductoCard };
