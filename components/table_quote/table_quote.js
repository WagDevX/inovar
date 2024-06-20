import { useState, useRef, useEffect } from "react";
import ReactToPrint from "react-to-print";
import { QuoteToPrint } from "../quotetoprint/quotetoprint";

export default function TableQuote() {
  const quoteToPrintRef = useRef(null);
  const [table, setTable] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cellPhone, setCellPhone] = useState("");
  const [address, setAddress] = useState("");
  const [itemDescription, setItemDescription] = useState("");
  const [itemQuantity, setItemQuantity] = useState("");
  const [itemPrice, setItemPrice] = useState("");
  const [totalSum, setTotalSum] = useState();
  const [discount, setDiscount] = useState();
  const [discountValue, setDiscountValue] = useState();

  function addItemToQuote() {
    if (
      !firstName ||
      !lastName ||
      !cellPhone ||
      !address ||
      !itemDescription ||
      !itemQuantity ||
      !itemPrice
    ) {
      alert("Preencha todos os campos");
      return;
    }
    const item = {
      firstName: firstName,
      lastName: lastName,
      cellPhone: cellPhone,
      address: address,
      itemDescription: itemDescription,
      itemQuantity: itemQuantity,
      itemPrice: itemPrice,
      discount: discountValue,
    };
    setTable((prev) => [...prev, item]);
    setItemDescription("");
    setItemQuantity("");
    setItemPrice("");
  }

  function removeItemFromQuote(index) {
    setTable((prev) => prev.filter((_, i) => i !== index));
  }

  function calculateDiscount() {
    console.log("calculando desconto");
    console.log(discount);
    if (table.length > 0) {
      const total = table.reduce((acomulator, dado) => {
        return (
          parseFloat(dado.itemPrice.replace(",", ".")) *
            parseInt(dado.itemQuantity) +
          acomulator
        );
      }, 0);

      const discountValue = parseFloat(discount);
      const discountCalc = (parseFloat(total) * discountValue) / 100;
      setDiscountValue(discountCalc);
    }
  }

  useEffect(() => {
    calculateDiscount();
  }, [discount, table]);

  useEffect(() => {
    setTotalSum(
      table.reduce((acomulator, dado) => {
        return (
          parseFloat(dado.itemPrice.replace(",", ".")) *
            parseInt(dado.itemQuantity) +
          acomulator
        );
      }, 0)
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
            for="cellphone"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Cliente: Contato
          </label>
          <input
            value={cellPhone}
            onChange={(ev) => setCellPhone(ev.target.value)}
            type="text"
            id="cellphone"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Telefone/Celular"
            required
          />
        </div>
        <div>
          <label
            for="address"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Cliente: Endereço
          </label>
          <input
            value={address}
            onChange={(ev) => setAddress(ev.target.value)}
            type="text"
            id="address"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Endereço"
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
            type="number"
            id="item_price"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Preço do item"
            required
          />
        </div>
        <div>
          <label
            for="discount"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Desconto
          </label>
          <input
            value={discount}
            onChange={(ev) => setDiscount(ev.target.value)}
            type="number"
            id="discount"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Porcentagem de desconto"
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
              <th></th>
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
                  <td>
                    <button
                      onClick={() => {
                        removeItemFromQuote(index);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-red-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="white"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            {discount != "" && discount != 0 && (
              <tr className="bg-blue-600">
                <th
                  colSpan={3}
                  scope="row"
                  className="px-6 py-4 font-extrabold text-lg text-center text-white whitespace-nowrap dark:text-white"
                >
                  DESCONTO
                </th>
                <td className="px-6 py-4 font-extrabold text-lg text-white whitespace-nowrap dark:text-white">
                  -
                  {discountValue?.toLocaleString("pt-br", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </td>
                <td></td>
              </tr>
            )}
            <tr className="bg-blue-600">
              <th
                colSpan={3}
                scope="row"
                className="px-6 py-4 font-extrabold text-xl text-center text-white whitespace-nowrap dark:text-white"
              >
                TOTAL
              </th>
              <td className="px-6 py-4 font-extrabold text-xl text-white whitespace-nowrap dark:text-white">
                {discount != 0 && discount != "" && discount != NaN
                  ? (totalSum - discountValue).toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })
                  : totalSum?.toLocaleString("pt-br", {
                      style: "currency",
                      currency: "BRL",
                    })}
              </td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="hidden">
        <QuoteToPrint ref={quoteToPrintRef} dados={table} disc={discount} />
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
