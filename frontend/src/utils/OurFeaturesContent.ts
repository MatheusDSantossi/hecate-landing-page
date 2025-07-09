import checkIcon from "/check.svg";

export interface Feature {
    imgSrc: string; 
    imgAlt: string;
    imgClass: string;
    flexClass: string;
    contentMargin: string;
    text: string;
    buttonLabel: string;
    iconSrc: string;
}
export const features: Feature[] = [
  {
    imgSrc: "/our_feature_image_1.svg",
    imgAlt: "Feature 1 idea",
    imgClass: "",
    flexClass: "lg:flex-row",
    contentMargin: "lg:mr-50",
    text: "Give your clients a better First Point of Contact (FPOC)",
    buttonLabel: "Service",
    iconSrc: checkIcon,
},
{
    imgSrc: "/our_feature_image_2.svg",
    imgAlt: "Feature 2 income",
    imgClass: "lg:mr-60",
    flexClass: "lg:flex-row-reverse",
    contentMargin: "lg:ml-30",
    text: "Give your clients the best experience",
    buttonLabel: "Income",
    iconSrc: checkIcon,
},
{
  imgSrc: "/our_feature_image_3.svg",
  imgAlt: "Feature 3 happiness",
  imgClass: "",
  flexClass: "lg:flex-row",
  contentMargin: "md:mr-30",
  text: "Give to your clients the best experience",
  buttonLabel: "Happiness",
  iconSrc: checkIcon,
},
];
