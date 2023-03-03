import atacarejo from '../../assets/atacarejo.png'
import selfcheckout from '../../assets/selfcheckout-slide.png'
import cissBox from '../../assets/cissbox.jpg'
import radar from '../../assets/radar.jpg'

export const images = [atacarejo, selfcheckout, cissBox, radar]
export const text = ["Atacarejo", "Selfcheckout", "CissBox" ,"Radar XMl"]
const imageByIndex = (index) => images[index % images.length]
export const textByIndex = (index) => text[index % text.length]

export default imageByIndex;