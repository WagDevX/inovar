import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../public/images/AC_Repair_.webp";
import benefitTwoImg from "../public/images/elgin-ofertas-mobile.png";

const benefitOne = {
  title: "Serviços de reparo",
  desc: "Serviços de manutenção e higienização de ar condicionado, consertos de ar condicionado split.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Higienização",
      desc: "A higienização de ar condicionado é essencial para a saúde, evita doenças respiratórias, alergias e mau cheiro.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Manutenção",
      desc: "A manutenção de ar condicionado é necessária para garantir o bom funcionamento do aparelho, evitando problemas futuros.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Consertos",
      desc: "Consertos de ar condicionado em geral, mudança de local, troca de peças, reparos em geral.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Serviços de venda e instalação",
  desc: "Pré-instalação, instalação e venda de equipamentos ar condicionado.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Pré-instalação",
      desc: "Pré-instalação de ar condicionado, avaliação do ambiente, dimensionamento do equipamento.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Instalação",
      desc: "Instalação de ar condicionado, instalação de split, instalações de 7000BTUs a 70000BTUs.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Venda e instalação",
      desc: "Venda de ar condicionado, instalação de ar condicionado, venda de split, instalação de spli, serviço completo.",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
