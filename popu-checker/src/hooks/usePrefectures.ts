import { useState, useEffect } from "react";
import axios from "axios";
import { Prefecture } from "../types/types";

// 都道府県を取得
// コンポーネントがマウントされた後に一度だけ実行される
export const usePrefectures = () => {
  const [prefectures, setPrefectures] = useState<Prefecture[]>([]);

  useEffect(() => {
    const fetchPrefectures = async () => {
      try {
        // RESAS APIから都道府県リストを取得する
        const response = await axios.get("https://opendata.resas-portal.go.jp/api/v1/prefectures", {
          headers: { "X-API-KEY": process.env.REACT_APP_RESAS_API_KEY },
        });
        // 取得したデータをステートに格納
        setPrefectures(response.data.result);
      } catch (error) {
        // エラー時の処理
        console.error("[Error] 都道府県リストを取得できません", error);
      }
    };

    fetchPrefectures();
  }, []);

  return prefectures;
};
