import React, { useState } from "react";
import "./App.css";
import PrefectureSelector from "./components/PrefectureSelector";
import PopulationChart from "./components/PopulationChart";
import Header from "./components/Header";
import { usePrefectures } from "./hooks/usePrefectures";
import { usePopulation } from "./hooks/usePopulation";
// import { Prefecture, PopulationDataset, OptionType } from "./types/types"; // カスタムフック生成により
// import axios from "axios"; // カスタムフック生成により
import { OptionType } from "./types/types";
import Select, { MultiValue } from "react-select";

const App: React.FC = () => {
  /*
    ステート
  */
  // 各都道府県のデータを格納するステート
  // const [prefectures, setPrefectures] = useState<Prefecture[]>([]); // カスタムフック生成により
  const [selectedPrefectures, setSelectedPrefectures] = useState<number[]>([]);

  // 選択された都道府県の人口データセットを格納するステート
  // const [populationDatasets, setPopulationDatasets] = useState<PopulationDataset[]>([]);　// カスタムフック生成により
  const populationDatasets = usePopulation(selectedPrefectures);

  // 選択された都道府県コードを格納するステート
  // const [selectedPrefectures, setSelectedPrefectures] = useState<number[]>([]);　// カスタムフック生成により
  const prefectures = usePrefectures();

  /*
    react-select用の選択肢を設定
  */
  const selectOptions = prefectures.map((prefecture) => ({
    value: prefecture.prefCode,
    label: prefecture.prefName,
  }));
  // 検索ボックスから選択された都道府県を更新するハンドラ
  const handlePrefectureChange = (selectedOptions: MultiValue<OptionType> | null) => {
    const selectedValues = selectedOptions ? selectedOptions.map((option) => option.value) : [];
    setSelectedPrefectures(selectedValues);
  };

  // JSX
  return (
    <>
      <Header />
      <div className="top-contents">
        <section className="top-prefecture">
          <h2>都道府県</h2>
          {/* react-selectコンポーネントを使用 */}
          <PrefectureSelector options={selectOptions} onChange={handlePrefectureChange} />
          <div className="top-prefecture-inner"></div>
        </section>
        <section className="graph-data">
          <h2>人口増減グラフ</h2>
          <PopulationChart populationDatasets={populationDatasets} prefectures={prefectures} />
        </section>
      </div>
    </>
  );
};

export default App;
