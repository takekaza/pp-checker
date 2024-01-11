import { FC, useState } from "react";
import "./App.css";
import PrefectureSelector from "./components/PrefectureSelector";
import PopulationChart from "./components/PopulationChart";
import Header from "./components/Header";
import { usePrefectures } from "./hooks/usePrefectures";
import { usePopulation } from "./hooks/usePopulation";
import { OptionType } from "./types/types";
import Select, { MultiValue } from "react-select";
import TestComponent from "./components/TestComponent"; // 練習用
import { TestTodo } from "./components/TestTodo";
// import DataSelector from "./components/DataSelector"; // 別件で実装予定

const App: FC = () => {
  /*
    ステート
  */
  // 各都道府県のデータを格納するステート
  const [selectedPrefectures, setSelectedPrefectures] = useState<number[]>([]);

  // 選択された都道府県の人口データセットを格納するステート
  const populationDatasets = usePopulation(selectedPrefectures);

  // 選択された都道府県コードを格納するステート
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

  /*
    別件で実装予定
  */
  // const handleDatasetChange = (dataset: string) => {
  //   // 選択されたデータセットに基づく処理記載
  //   console.log(dataset);
  // };

  // JSX
  return (
    <>
      <Header />
      <div className="inner-contents">
        <section className="prefecture">
          <h2>都道府県</h2>
          {/* react-selectコンポーネントを使用 */}
          <PrefectureSelector options={selectOptions} onChange={handlePrefectureChange} />
          <div className="prefecture-inner"></div>
        </section>
        <br />
        <section className="graph-data">
          <h2>人口増減グラフ</h2>
          <PopulationChart populationDatasets={populationDatasets} prefectures={prefectures} />
        </section>
      </div>
      <br />
      <div className="inner-contents">
        {/* 練習用 */}
        {/* <section className="test-inner">
          <TestComponent />
        </section> */}
      </div>
      <div>
        <br />
        <br />
        <br />
        {/* 練習用 */}
        {/* <TestTodo /> */}
        <br />
        <br />
        {/* 別で実装予定 */}
        {/* <DataSelector onDatasetChange={handleDatasetChange} /> */}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </>
  );
};

export default App;
