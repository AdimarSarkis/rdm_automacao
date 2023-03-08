import Footer from '../Footer';
import Header from '../Header';

const SaibaMais = (index) => {
  return(
    <>
      
      { index === 0 ? <h1> Teste 1</h1> : (
          index === 1 ? <h1> Teste 2</h1> : (
            index === 2 ? <h1> Teste 3</h1> : (
            index === 3 ? <h1> Teste 4</h1> : <h1> Teste 5 </h1>
          )
        )
      )
      }
      <Footer />
    </>
  );
}

export default SaibaMais;