import { BrowserRouter as Router, Routes, Route, BrowserRouter} from 'react-router-dom';
import Inicio from './Inicio';
import Nav from './components/Nav';
import Contacto from './pages/Contacto';
import Footer from './components/Footer';
import Postulate from './pages/Postulate';
import Mailing from './pages/Mailing';
import ScrollArriba from './components/scrollarriba';
import Ganadores from './pages/Ganadores';
import Error404 from './pages/Error404';

import '@mantine/core/styles.css';
import { MantineProvider } from '@mantine/core';
import '@mantine/carousel/styles.css';

function App() {
  return (
 <BrowserRouter>
  <MantineProvider>
      <Nav />
      <ScrollArriba />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path='/Postulate' element={<Postulate/>}/>
        <Route path='/Mailing' element={<Mailing/>}/>
        <Route path='/Ganadores' element={<Ganadores />}/>
        <Route path='*' element={<Error404/>}/>
      </Routes>
      <Footer/ >
  </MantineProvider>
</BrowserRouter>   
  );
}


export default App;
