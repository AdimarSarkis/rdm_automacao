import { Routes, Route } from 'react-router-dom';
import Contato from './pages/Contato';
import Home from './pages/Home';
import PageDownload from './pages/PageDownload';
import Sistemas from './pages/Sistemas';
import SobreNos from './pages/SobreNos';

export function Router(){
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home />} />
      <Route path="/downloads" element={<PageDownload />} />
      <Route path="/sobrenos" element={<SobreNos />} />
      <Route path="/sistemas" element={<Sistemas />} />
      <Route path="/contato" element={<Contato />} />
    </Routes>
  );
}