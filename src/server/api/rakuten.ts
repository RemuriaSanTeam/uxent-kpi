import type { IncomingMessage, ServerResponse } from "http";
import axios from "axios";
import * as dotenv from "dotenv";
dotenv.config();

// 楽天APIの設定
const rakutenApiUrl =
  "https://app.rakuten.co.jp/services/api/IchibaItem/Search/20220601";
const apiKey = process.env.RAKUTEN_API_KEY; // あなたの楽天APIキー
const searchQuery = "your search query"; // 検索クエリ

export default async (req: IncomingMessage, res: ServerResponse) => {
  if (req.method != "GET") {
    console.log(req.method);
    res.statusCode = 500;
    res.end();
  }

  // 楽天APIへのリクエスト
  try {
    const rakutenApiParams = {
      applicationId: apiKey,
      keyword: searchQuery,
      // 他の必要なパラメータを追加できます
    };

    const rakutenApiResponse = await axios.get(rakutenApiUrl, {
      params: rakutenApiParams,
    });
    const rakutenApiData = rakutenApiResponse.data;

    const responseData = {
      rakutenApiData: rakutenApiData,
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
