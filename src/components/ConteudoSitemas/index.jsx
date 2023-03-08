import EmblaCarousel from "./EmblaCarousel";
import { useRef } from "react";
const ConteudoSistemas = () => {
  
  const OPTIONS = { inViewThreshold: 0, dragFree: true }
  const SLIDE_COUNT = 4
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
  

  return(
    <div className='downloads'>
      <div className='top'></div>
      <div className="sandbox__carousel">
        <EmblaCarousel slides={SLIDES} options={OPTIONS} />
      </div>
    </div>
  );
}

export default ConteudoSistemas;