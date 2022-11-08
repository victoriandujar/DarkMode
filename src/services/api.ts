import axios from "axios";

const api = axios.create({
  baseURL: "https://servicebus2.caixa.gov.br/portaldeloterias/api/",
});

export default api;