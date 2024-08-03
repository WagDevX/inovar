import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";

const Home = () => {
  return (
    <>
      <Head>
        <title>
          Inovar Climatização - Empresa que presta serviços de instalação e
          manutenção de ar condicionados
        </title>
        <meta
          name="descrição"
          content="Inovar Climatização - Empresa que presta serviços de instalação e
          manutenção de ar condicionados"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Benefícios"
        title="Por que escolher a Inovar Climatização?"
      >
        A Inovar Climatização é uma empresa que presta serviços de venda,
        instalação e manutenção de ar condicionados. Nossos técnicos são
        especializados e treinados para atender a todas as suas necessidades.
      </SectionTitle>
      <Benefits id="serviços" data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <SectionTitle pretitle="Asssita o vídeo" title="O que nós oferecemos?">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      </SectionTitle>
      <Video />
      <SectionTitle
        pretitle="Testemunhos"
        title="O que nossos clientes dizem sobre nós"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        minus corrupti nulla quo porro rem quibusdam soluta nostrum voluptatem
        dolores amet molestiae voluptatibus, obcaecati culpa id temporibus
        quasi! Alias, corporis?
      </SectionTitle>
      <Testimonials />
      <SectionTitle pretitle="FAQ" title="Pergutnas frequentes">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam veniam
        fuga, quo repudiandae quae non, nisi, vel commodi nulla odit ipsum
        aliquid! Est dolorum nemo unde ab eos minus alias?
      </SectionTitle>
      <Faq />
      <Cta />
      <Footer />
      <PopupWidget />
    </>
  );
};

export default Home;
