type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "gymcar@gmail.com",
  title: "Ahoj, my sme GymCar 👋",
  // profile: "/profile.webp",
  description:
    "Sme študenti Gymnázia. Naším cieľom je vytvoriť *efektívnejšie* a *ekologickejšie* riešenie pre študentov, ktorí dochádzajú do školy.  *Študentom školy* chceme pomôcť ušetriť čas a zároveň prispieť k lepšej ochrane *životného prostredia.* Naša aplikácia umožňuje študentom zdieľať cestu do školy s ostatnými spolužiakmi, čo znamená menšie *náklady* na dopravu a využitie kapacity vozidiel. ",
  socials: [
    {
      label: "Web App",
      link: "https://gymcar.pro/",
    },
    {
      label: "Instagram",
      link: "https://instagram.com/gymcar_zh",
    },
    {
      label: "TikTok",
      link: "https://tiktok.com/@gymcar_zh",
    },
  {
    label: "GitHub",
    link: "https://github.com/Perchant76",
  }
  ],
};

export default presentation;
