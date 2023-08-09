import type { IncomingMessage, ServerResponse } from "http";
import axios from "axios";
import * as dotenv from "dotenv";
dotenv.config();

// YahooショッピングAPIの設定
const yahooShoppingApiUrl =
  "https://shopping.yahooapis.jp/ShoppingWebService/V3/itemSearch";
const apiKey = process.env.YAHOO_API_KEY; // あなたのYahoo APIキー
const searchQuery = "your search query"; // 検索クエリ

export default async (req: IncomingMessage, res: ServerResponse) => {
  if (req.method != "GET") {
    console.log(req.method);
    res.statusCode = 500;
    res.end();
  }

  // YahooショッピングAPIへのリクエスト
  try {
    const yahooApiParams = {
      appid: apiKey,
      query: searchQuery,
      // 他の必要なパラメータを追加できます
    };

    const yahooApiResponse = await axios.get(yahooShoppingApiUrl, {
      params: yahooApiParams,
    });
    const yahooApiData = yahooApiResponse.data;

    const responseData = {
      yahooShoppingApiData: yahooApiData,
    };

    const json = JSON.stringify(responseData);

    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    res.end(json);
  } catch (error) {
    console.error("Error:", error);
    res.statusCode = 500;
    res.end();
  }
};
