import { initializeConnector } from "@web3-react/core";
import { Url } from "@web3-react/url";
import { URLS } from "../../chains";

export const [url, hooks] = initializeConnector(
  (actions) => new Url(actions, URLS[1][0]),// [1] lo busca por nombre de propiedad dentro del objeto URLS, y el [0] busca la posicion en el valor de la propiedad 1 (que es un array)
  [1]
);
