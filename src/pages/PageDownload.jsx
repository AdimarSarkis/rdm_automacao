import "../backend/index"
import Header from '../components/Header/index.jsx';
import Footer from '../components/Footer/index.jsx';
import ConteudoDownload from '../components/ConteudoDownload/index.jsx';

function PageDownload() {
  return (
    <>
      <Header />
      <ConteudoDownload />
      <Footer />
    </>
  );
}

export default PageDownload;
