export interface FooterOption {
  label: string;
  path: string;
}

export interface FooterMenu {
  title: string;
  options: FooterOption[];
}

export const footerMenus: FooterMenu[] = [
  {
    title: "Platform",
    options: [
      { label: "Prices", path: "/prices" },
      { label: "Integrations", path: "/integrations" },
      { label: "AI Feature", path: "/ai-features" },
    ],
  },
  {
    title: "Contact Us",
    options: [
      { label: "Send a Message", path: "/contact" },
      { label: "WhatsApp", path: "/whatsapp" },
      { label: "Instagram", path: "/instagram" },
    ],
  },
  {
    title: "About Us",
    options: [
      { label: "How it works?", path: "/how-it-works" },
      { label: "Company", path: "/company" },
      { label: "About Us", path: "/about" },
    ],
  },
];
