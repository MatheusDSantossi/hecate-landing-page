import AI from "/carousel/AI.jpg"
import Focus from "/carousel/Focus.png"
import GoogleGemini from "/carousel/google_gemini.png"
import Security from "/carousel/security.jpg"

export interface SlideType {
    src: string,
    alt: string
}


export const slides: SlideType[] = [
  {
    src: AI,
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
