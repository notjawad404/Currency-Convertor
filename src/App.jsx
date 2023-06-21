import './App.css'
import { useState } from "react";

function App() {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("PKR");
  const [amount, setAmount] = useState("");
  const conversionRate = 287.42;
  const [result, setResult] = useState("");

  const convertCurrency = () => {
    const convertedAmount = amount * conversionRate;
    setResult(
      `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`
    );
  };

  return (
    <div className="bg-red-400 flex justify-center items-center h-screen">
      <div className="container mx-96 p-4">
        <h1 className="mb-4 text-white">Currency Converter</h1>

        <div className="flex">
          <div className="mr-2">
            <label htmlFor="currency1" className="mx-3 text-white">
              From:
            </label>
            <select
              id="currency1"
              className="block w-full py-2 px-5 border border-gray-300 bg-white rounded-md shadow-sm"
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
            >
              <option value="USD">USD</option>
            </select>
          </div>

          <div className="mr-2">
            <label htmlFor="currency2" className="mx-3 text-white">
              To:
            </label>
            <select
              id="currency2"
              className="block w-full py-2 px-5 border border-gray-300 bg-white rounded-md shadow-sm"
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
            >
              <option value="PKR">PKR</option>
            </select>
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="amount" className="text-white">
            Amount:
          </label>
          <br />
          <input
            type="number"
            id="amount"
            className="w-50 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>

        <button
          onClick={convertCurrency}
          className="mt-4 py-2 px-4 bg-indigo-500 text-white rounded hover:bg-indigo-600"
        >
          Convert
        </button>

        <h2 id="result" className="mt-4 text-white">
          {result}
        </h2>
      </div>
    </div>
  );
}

export default App;

