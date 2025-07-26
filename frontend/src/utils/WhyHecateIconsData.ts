import aiIcon from "/whyHecate/AI-icon.svg";
import happyIcon from "/whyHecate/happy-icon.svg";
import infoIcon from "/whyHecate/Info.svg";
import support24h from "/whyHecate/Support 24h.svg";
import arrow from "/whyHecate/Arrow.svg";

export interface IconData {
    src: string;
    alt: string;
    className: string;
}

export const iconData: IconData[] = [
  /* 1. Central AI bulb at the top center */
  {
    src: aiIcon,
    alt: "AI bulb icon",
    className: "absolute left-1/2 top-0 w-12 h-12 transform -translate-x-1/2",
  },
  /* 2. Left icon (Support 24h) */
  {
    src: support24h,
    alt: "Support 24h icon",
    className:
      "absolute xs:left-16 sm:left-[25vw] xl:left-50 lg:left-65 md:left-55 sm:left-45 top-23 w-6 h-6 transform -translate-x-1/2",
  },
  /* 3. Right icon (Info) */
  {
    src: infoIcon,
    alt: "Info icon",
    className:
      "absolute xs:right-10 sm:right-[20vw] xl:right-45 lg:right-60 md:right-50 sm:right-40 top-23 w-6 h-6 transform -translate-x-1/2",
  },
  /* 4. Bottom icon (Happy face) */
  {
    src: happyIcon,
    alt: "Happy face icon",
    className: "absolute left-1/2 -bottom-3 w-6 h-6 transform -translate-x-1/2",
  },
  /* 5. Arrows */
  /* Arrow pointing from bulb down to happy face */
  {
    src: arrow,
    alt: "Arrow poiting down",
    className:
      "absolute left-1/2 top-[4.2rem] w-15 h-10 transform -translate-x-1/2 rotate-90",
  },
  /* Arrow from bulb to support (left) */
  {
    src: arrow,
    alt: "Arrow poiting left",
    className: "absolute xs:left-[25%] xs:top-[3.3rem] sm:left-[33%] sm:top-[3rem] w-15 h-10 transform rotate-150",
  },
  /* Arrow from bulb to info (right) */
  {
    src: arrow,
    alt: "Arrow poiting right",
    className: "absolute xs:right-[25%] xs:top-[3.3rem] sm:right-[33%] sm:top-[3rem] w-15 h-10 transform rotate-30",
  },
];
