import type { IncomingMessage, ServerResponse } from "http";
import axios from "axios";
import config from "#config";

let url: string = `https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601`;
const API_HEAD = {
  headers: {
    "X-MICROCMS-API-KEY": `https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601`,
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