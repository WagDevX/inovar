import { useState, useRef, useEffect } from "react";
import ReactToPrint from "react-to-print";
import { QuoteToPrint } from "../quotetoprint/quotetoprint";

export default function TableQuote() {
  const quoteToPrintRef = useRef(null);
  const [table, setTable] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [totalSum, setTotalSum] = useState();

  function addItemToQuote() {
    const item = {
      firstName: firstName,
      lastName: lastName,
      itemDescription: itemDescription,
      itemQuantity: itemQuantity,
      itemPrice: itemPrice,
    };
    setTable((prev) => [...prev, item]);
  }

  useEffect(() => {
    setTotalSum(
      table
        .reduce((acomulator, dado) => {
          return (
            parseFloat(dado.itemPrice.replace(",", ".")) *
              parseInt(dado.itemQuantity) +
            acomulator
          );
        }, 0)
        .toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })
    );
  }, [table]);

  return (
    <div className="grid w-full">
      <h1 className="text-primary text-3xl font-bold">Geração de orçamentos</h1>

      <div className="grid gap-6 mb-6 md:grid-cols-2 mt-5">
        <div>
          <label
            for="first_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Cliente: Primeiro nome
          </label>
          <input
            value={firstName}
            onChange={(ev) => setFirstName(ev.target.value)}
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="João"
            required
          />
        </div>
        <div>
          <label
            for="last_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Cliente: Último nome
          </label>
          <input
            value={lastName}
            onChange={(ev) => setLastName(ev.target.value)}
            type="text"
            id="last_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Pessoa"
            required
          />
        </div>
        <div>
          <label
            for="item_name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Descrição do item/serviço
          </label>
          <input
            value={itemDescription}
            onChange={(ev) => setItemDescription(ev.target.value)}
            type="text"
            id="item_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Nome do Produto/Serviço"
            required
          />
        </div>
        <div>
          <label
            for="quantity"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Quantidade do item
          </label>
          <input
            value={itemQuantity}
            onChange={(ev) => setItemQuantity(ev.target.value)}
            type="number"
            id="quantity"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Quantidade do item"
            required
          />
        </div>
        <div>
          <label
            for="tem_price"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Preço unitário do item/serviço
          </label>
          <input
            value={itemPrice}
            onChange={(ev) => setItemPrice(ev.target.value)}
            type="price"
            id="item_price"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Preço do item"
            required
          />
        </div>
      </div>
      <button
        onClick={() => addItemToQuote()}
        className="text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm w-full sm:w-auto px-6 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Adicionar item
      </button>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
        <table className="w-full text-sm text-left text-blue-100 dark:text-blue-100">
          <thead className="text-xs text-white uppercase bg-blue-600 dark:text-white">
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
            {table.length > 0 &&
              table.map((m, index) => (
                <tr
                  key={index}
                  className="bg-blue-500 border-b border-blue-400"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-blue-50 whitespace-nowrap dark:text-blue-100"
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
            <tr className="bg-blue-600">
              <th
                colSpan={3}
                scope="row"
                className="px-6 py-4 font-extrabold text-xl text-center text-white whitespace-nowrap dark:text-white"
              >
                TOTAL
              </th>
              <td className="px-6 py-4 font-extrabold text-xl text-white whitespace-nowrap dark:text-white">
                {totalSum?.toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="hidden">
        <QuoteToPrint ref={quoteToPrintRef} dados={table} />
      </div>
      <ReactToPrint
        trigger={() => (
          <button className="mt-5 text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm w-full sm:w-auto px-6 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Imprimir
          </button>
        )}
        content={() => quoteToPrintRef.current}
      />
    </div>
  );
}
