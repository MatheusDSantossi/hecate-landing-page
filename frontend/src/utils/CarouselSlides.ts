import Grow from "/carousel/Grow.png"
import Focus from "/carousel/Focus.png"
import GoogleGemini from "/carousel/google_gemini.jpg"
import Security from "/carousel/security.jpg"

export interface SlideType {
    src: string,
    alt: string
}


export const slides: SlideType[] = [
  {
    src: Grow,
    alt: "Flowers growing"
  },
  {
    src: Focus,
    alt: "The lente of the camera focusing"
  },
  {
    src: GoogleGemini,
    alt: "Google gemini"
  },
  {
    src: Security,
    alt: "Google gemini"
  },
];

export const SLIDES_COUNT = slides.length;
