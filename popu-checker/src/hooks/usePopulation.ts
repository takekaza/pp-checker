import { useState, useEffect } from "react";
import axios from "axios";
import { PopulationDataset } from "../types/types";

export const usePopulation = (selectedPrefectures: number[]) => {
  const [populationDatasets, setPopulationDatasets] = useState<PopulationDataset[]>([]);

  useEffect(() => {
    /*
    選択された都道府県の人口データを取得する非同期関数
    */
    const fetchPopulationData = async (prefCode: number): Promise<PopulationDataset | null> => {
      try {
        // RESAS APIから人口データを取得
        const response = await axios.get(
          `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${prefCode}`,
          {
            headers: { "X-API-KEY": process.env.REACT_APP_RESAS_API_KEY },
          }
        );
        // responseの中身が期待したデータ構造になっているか
        return { prefCode, data: response.data.result.data[0].data };
      } catch (error) {
        // エラー時の処理
        console.error("[Error] 人口数を取得できません", error);
        return null; // エラーが発生した場合はnullを返す
      }
    };

    /*
      選択された都道府県が変わったときに人口データを取得する
      現在選択されている都道府県の人口データを更新する関数
    */
    const updatePopulationDatasets = async () => {
      if (selectedPrefectures.length === 0) {
        // 選択された都道府県がない場合は人口データセットを空にする
        setPopulationDatasets([]);
        return;
      }

      const requests = selectedPrefectures.map((prefCode) => fetchPopulationData(prefCode));
      // const newDatasets = await Promise.all(requests);
      // Promise.allを使って、選択された全ての都道府県の人口データを並列で取得する
      // nullでないデータセットだけをフィルタリングしてステートを更新する
      const newDatasets = (await Promise.all(requests)).filter(
        (dataset): dataset is PopulationDataset => dataset !== null
      );
      // 選択された都道府県がある場合のみ、データ更新関数を実行
      // 選択された都道府県がない場合は人口データセットを空にする
      setPopulationDatasets(newDatasets.filter((dataset) => dataset !== null));
    };

    updatePopulationDatasets();
  }, [selectedPrefectures]);

  return populationDatasets;
};
