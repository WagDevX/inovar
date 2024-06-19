import Head from "next/head";

import Navbar from "../components/navbar";

import Footer from "../components/footer";

import PopupWidget from "../components/popupWidget";
import TableQuote from "../components/table_quote/table_quote";
import SectionTitle from "../components/sectionTitle";

const Orcamento = () => {
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

      <div class="grid mt-[150px]  mx-80 ">
        <TableQuote />
      </div>

      <Footer />
      <PopupWidget />
    </>
  );
};

export default Orcamento;
