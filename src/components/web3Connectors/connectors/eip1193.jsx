import { Eip1193Bridge } from "@ethersproject/experimental";
import { JsonRpcProvider } from "@ethersproject/providers";
import { initializeConnector } from "@web3-react/core";
import { EIP1193 } from "@web3-react/eip1193";
import { URLS } from "../../chains";

class Eip1193BridgeWithoutAccounts extends Eip1193Bridge {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  request(request) {
    if (
      request.method === "eth_requestAccounts" ||
      request.method === "eth_accounts"
    )
      return Promise.resolve([]);
    return super.request(request);
  }
}

const ethersProvider = new JsonRpcProvider(URLS[1][0], 1); // [1] lo busca por nombre de propiedad dentro del objeto URLS, y el [0] busca la posicion en el valor de la propiedad 1 (que es un array)
const eip1193Provider = new Eip1193BridgeWithoutAccounts(
  ethersProvider.getSigner(),
  ethersProvider
);

export const [eip1193, hooks] = initializeConnector(
  (actions) => new EIP1193(actions, eip1193Provider),
  [1]
);
