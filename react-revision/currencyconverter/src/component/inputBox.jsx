import React, { useId } from "react";

export const InputBox = ({
  lable,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOption = [],
  selectedCurrency = "usd",
  amountDisabled = "false",
  currencyDisabled = "false",
  className = "bg-slate-100",
}) => {
  const id = useId();
  return (
    <div
      className={`bg-white p-3 rounded-lg text-sm flex flex-row${className} `}
    >
      <div className=" w-1-2 flex flex-wrap justify-start text-left">
        <lable htmlFor={id} className="text-black/40 mb-2 inline-block">
          {lable}
        </lable>
        <input
          className=" outline-none bg-transparent w-full py-1.5"
          id={id}
          type="number"
          // placeholder="test"
          // disabled={amountDisabled}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        ></input>
      </div>
      <div className="w-1-2 flex flex-wrap  justify-end   text-right">
        <p className="text-black/40 mb-2 w-full">Currency type</p>
        <select
          className="rounded-lg p-1 bg-gray-100 cursor-pointer outline-none"
          value={selectedCurrency}
          onChange={(e) => {
            onCurrencyChange && onCurrencyChange(e.target.value);
          }}
        >
          {currencyOption.map((currency) => (
            <option key={currency} value={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
