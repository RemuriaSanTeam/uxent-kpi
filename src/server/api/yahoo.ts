import type { IncomingMessage, ServerResponse } from "http";
import axios from "axios";

let url: string = `https://shopping.yahooapis.jp/ShoppingWebService/V3/itemSearch`;
const API_HEAD = {
  headers: {
    "X-MICROCMS-API-KEY": `https://shopping.yahooapis.jp/ShoppingWebService/V3/itemSearch`,
  },
};

export default async (req: IncomingMessage, res: ServerResponse) => {
  if (req.method != "GET") {
    console.log(req.method);
    res.statusCode = 500;
    res.end();
  }

  let data: Array;
  await axios.get(`${url}`, API_HEAD).then((res) => {
    data = res.data;
  });
  const json = JSON.stringify(data);

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(json);
};
