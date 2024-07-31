import React from "react";

export class QuoteToPrint extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { dados } = this.props;
    const date = new Date();

    let total = dados.reduce((acomulator, dado) => {
      return (
        parseFloat(dado.itemPrice.replace(",", ".")) *
          parseInt(dado.itemQuantity) +
        acomulator
      );
    }, 0);

    let discount =
      (dados.reduce((acomulator, dado) => {
        return (
          parseFloat(dado.itemPrice.replace(",", ".")) *
            parseInt(dado.itemQuantity) +
          acomulator
        );
      }, 0) *
        this.props.disc) /
      100;

    return (
      <>
        <div className="canvas_div_pdf h-[1600px] w-[1184px] bg-white ">
          <div className="quoteheader flex bg-blue-900 justify-center h-[400px]">
            <div className="firstquoteheader grid justify-items-center bg-gradient-to-b  h-[200px] w-[1184px] from-blue-50 to-blue-300 pt-2">
              <div className="relative">
                <img
                  className="mt-5 "
                  src="/logos/logoea.png"
                  alt=""
                  width="350"
                  height="300"
                />
              </div>
            </div>
          </div>
          <div className="px-20">
            <h1 className="text-5xl font-bold">ORÇAMENTO</h1>
            <div className="flex gap-5">
              <dl className="max-w-md text-gray-900 divide-y divide-gray-200 dark:divide-gray-700 mt-5">
                <div className="flex flex-col pb-3">
                  <dt className="mb-1 text-gray-500 md:text-md dark:text-gray-400">
                    NOME FANTASIA
                  </dt>
                  <dd className="text-md font-semibold">Inovar Climatização</dd>
                </div>
                <div className="flex flex-col py-3">
                  <dt className="mb-1 text-gray-500 md:text-md dark:text-gray-400">
                    RAZÃO SOCIAL
                  </dt>
                  <dd className="text-md font-semibold">
                    Inovar Climatizacao Ltda
                  </dd>
                </div>
                <div className="flex flex-col pt-3 pb-3">
                  <dt className="mb-1 text-gray-500 md:text-md dark:text-gray-400">
                    ENDEREÇO
                  </dt>
                  <dd className="text-md font-semibold">
                    Rua dos Pioneiros, 144 - Centro-sul, Sorriso - MT
                  </dd>
                </div>
                <div className="flex flex-col pt-3">
                  <dt className="mb-1 text-gray-500 md:text-md dark:text-gray-400">
                    CLIENTE
                  </dt>
                  <dd className="text-md font-semibold">
                    {dados[0]?.firstName + " " + dados[0]?.lastName}
                  </dd>
                </div>
              </dl>
              <dl className="max-w-xl text-gray-900 divide-y divide-gray-200 dark:divide-gray-700 mt-5">
                <div className="flex flex-col pb-3">
                  <dt className="mb-1 text-gray-500 md:text-md dark:text-gray-400">
                    CONTATO
                  </dt>
                  <dd className="text-md font-semibold">
                    66 99618-3048 / 66 99624-1178
                  </dd>
                </div>
                <div className="flex flex-col py-3">
                  <dt className="mb-1 text-gray-500 md:text-md dark:text-gray-400">
                    CNPJ
                  </dt>
                  <dd className="text-md font-semibold">
                    45.849.818/0001-11 IE: ISENTO
                  </dd>
                </div>
                <div className="flex flex-col pt-3 pb-3">
                  <dt className="mb-1 text-gray-500 md:text-md dark:text-gray-400">
                    DATA DE EMISSÃO
                  </dt>
                  <dd className="text-md font-semibold">
                    {date.toLocaleDateString({ options: "dd/mm/yyyy" })}
                  </dd>
                </div>
                <div className="flex gap-20 ">
                  <div className="flex flex-col pt-3">
                    <dt className="mb-1 text-gray-500 md:text-md dark:text-gray-400">
                      TELEFONE
                    </dt>
                    <dd className="text-md font-semibold">
                      {dados[0]?.cellPhone}
                    </dd>
                  </div>
                  <div className="flex flex-col pt-3">
                    <dt className="mb-1 text-gray-500 md:text-md dark:text-gray-400">
                      ENDEREÇO
                    </dt>
                    <dd className="text-md font-semibold">
                      {dados[0]?.address}
                    </dd>
                  </div>
                </div>
              </dl>
            </div>

            <div className="relative  over shadow-md sm:rounded-lg mt-10">
              <table className="w-full  text-sm text-left text-black dark:text-blue-100">
                <thead className="text-xs text-black uppercase bg-blue-400 dark:text-white">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Descrição do Produto/Serviço
                    </th>
                    <th scope="col" className="px-6 py-3">
                      {" "}
                      Quantidade
                    </th>
                    <th scope="col" className="px-6 py-3">
                      {" "}
                      Preço unitário
                    </th>
                    <th scope="col" className="px-6 py-3">
                      {" "}
                      Preço final
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dados.length > 0 &&
                    dados.map((m) => (
                      <tr className="bg-blue-300 border-b border-gray-600 ">
                        <th
                          scope="row"
                          className="px-6 py-4 max-w-[600px] font-medium text-black text-wrap  dark:text-blue-100"
                        >
                          {m.itemDescription}
                        </th>
                        <td className="px-6 py-4"> {m.itemQuantity}</td>
                        <td className="px-6 py-4">
                          {" "}
                          {parseFloat(m.itemPrice).toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </td>
                        <td className="px-6 py-4">
                          {" "}
                          {(
                            parseInt(m.itemQuantity) *
                            parseFloat(m.itemPrice.replace(",", "."))
                          ).toLocaleString("pt-br", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </td>
                      </tr>
                    ))}
                  {this.props.disc != "" && this.props.disc != 0 && (
                    <tr className="bg-blue-400">
                      <th
                        colSpan={3}
                        scope="row"
                        className="px-6 py-4 font-extrabold text-lg text-center text-black whitespace-nowrap "
                      >
                        DESCONTO
                      </th>
                      <td className="px-6 py-4 font-extrabold text-lg text-black whitespace-nowrap ">
                        -
                        {discount.toLocaleString("pt-br", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </td>
                    </tr>
                  )}
                  <tr className="bg-blue-400">
                    <th
                      colSpan={3}
                      scope="row"
                      className="px-6 py-4 font-extrabold text-xl text-center text-black whitespace-nowrap "
                    >
                      TOTAL
                    </th>
                    <td className="px-6 py-4 font-extrabold text-xl text-black whitespace-nowrap ">
                      {(total - discount).toLocaleString("pt-br", {
                        style: "currency",
                        currency: "BRL",
                      })}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}
