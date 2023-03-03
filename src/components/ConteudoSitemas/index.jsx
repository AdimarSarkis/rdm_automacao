import EmblaCarousel from "./EmblaCarousel"
const ConteudoSistemas = () => {
  
  const OPTIONS = { inViewThreshold: 0, dragFree: true }
  const SLIDE_COUNT = 4
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())

  return(
    <div className='downloads'>
      <div className='top'></div>
      <p id="details">RDM Automação Comercial</p> 
      <div className="sandbox__carousel">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </div>
  );
}

export default ConteudoSistemas;