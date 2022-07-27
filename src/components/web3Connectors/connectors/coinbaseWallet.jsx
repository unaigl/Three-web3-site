import { CoinbaseWallet } from "@web3-react/coinbase-wallet";
import { initializeConnector } from "@web3-react/core";
import { URLS } from "../chains";

export const [coinbaseWallet, hooks] = initializeConnector(
  (actions) =>
    new CoinbaseWallet(actions, {
      url: URLS[3][0], // [1] lo busca por nombre de propiedad dentro del objeto URLS, y el [0] busca la posicion en el valor de la propiedad 1 (que es un array)
      appName: "React-Three-Ethers",
    })
);
