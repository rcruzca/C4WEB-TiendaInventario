import '../css/App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import { Navegacion } from '../layouts/Navegacion';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { InventariosCreados } from '../pages/InventariosCreados';
import { ProductosDetalle } from '../pages/ProductosDetalle';
import { CrearProducto } from '../pages/CrearProducto';

function App() {
  return (
    <BrowserRouter>
      <Navegacion/>
      <Routes>
        <Route path='/' element={<InventariosCreados/>}   />
        <Route path='/inventario/:id' element={<ProductosDetalle id={'/:id'}/>}   />
        <Route path='/crearProducto' element={<CrearProducto/>}   />
      </Routes>

    </BrowserRouter>
    
  );
}

export default App;
