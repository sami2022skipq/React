import { useEffect, useState } from "react";

function useCurrencyInfo( currency ) {
  const [data, setData] = useState({});
  useEffect(() => {
    console.log(`${currency} input`);
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency]));
    console.log(`${currency} input`);
  }, [currency]);
  return data;
}

export default useCurrencyInfo;
