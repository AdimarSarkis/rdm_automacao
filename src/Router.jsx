import { Routes, Route } from "react-router-dom";
import Contato from "./pages/Contato";
import Home from "./pages/Home";
import PageDownload from "./pages/PageDownload";
import Sistemas from "./pages/Sistemas";
import SobreNos from "./pages/SobreNos";
import SaibaMais from "./components/ConteudoSitemas/SaibaMais";
import Atacarejo from './components/ConteudoSitemas/Atacarejo';
import Selfcheckout from './components/ConteudoSitemas/Selfcheckout';
import Radar from './components/ConteudoSitemas/Radar';
import CissBox from './components/ConteudoSitemas/CissBox';
import Edit from "./pages/Edit";
import Login from "./pages/Login";
export function Router() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/downloads" element={<PageDownload />} />
      <Route path="/sobrenos" element={<SobreNos />} />
      <Route path="/sistemas" element={<Sistemas />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/login" element={<Login/>} /> 
      <Route path="/edit" element={<Edit/>} /> 
      <Route path="/sistemas/0" element={<Atacarejo/>} />
      <Route path="/sistemas/1" element={<Selfcheckout/>} />
      <Route path="/sistemas/2" element={<CissBox/>} />
      <Route path="/sistemas/3" element={<Radar/>} /> 
    </Routes>
  );
}
