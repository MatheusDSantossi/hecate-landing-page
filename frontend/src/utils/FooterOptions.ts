type OptionClickType = {
  option: string;
  onClick: () => void;
};

interface OptionProps {
  title: string;
  option1: OptionClickType;
  option2: OptionClickType;
  option3: OptionClickType;
}

export const Options: OptionProps[] = [
  {
    title: "Platform",
    option1: { option: "Prices", onClick: () => {} },
    option2: { option: "Integrations", onClick: () => {} },
    option3: { option: "AI Feature", onClick: () => {} },
  },
  {
    title: "Contact Us",
    option1: { option: "Send a Message", onClick: () => {
    } },
    option2: { option: "WhatsApp", onClick: () => {} },
    option3: { option: "Instagram", onClick: () => {} },
  },
  {
    title: "About Us",
    option1: { option: "How it works?", onClick: () => {} },
    option2: { option: "Company", onClick: () => {} },
    option3: { option: "About Us", onClick: () => {} },
  },
];
