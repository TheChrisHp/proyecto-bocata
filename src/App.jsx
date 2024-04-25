import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Contacto from './components/Contacto';
import Error404 from './components/Error404';
import Footer from './components/Footer';
import Inicio from './components/Inicio';


function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/Inicio" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="*" element={<Error404 />} />
        {/* Agrega más rutas según tus necesidades */}
      </Routes>
      <Footer/ >
    </Router>
  );
}

export default App;
