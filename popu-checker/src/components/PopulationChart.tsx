// PopulationChart.tsx
import React from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import Accessibility from "highcharts/modules/accessibility";
import { PopulationDataset, Prefecture } from "../types/types"; // types.tsからインポート

Accessibility(Highcharts);
/*
  PopulationChartコンポーネントのpropsの型定義
  */
interface PopulationChartProps {
  populationDatasets: PopulationDataset[];
  prefectures: Prefecture[];
}

const PopulationChart: React.FC<PopulationChartProps> = ({ populationDatasets, prefectures }) => {
  // Highchartsに渡すグラフ設定オプション
  const chartOptions: Highcharts.Options = {
    /*
      グラフの設定
    */
    title: {
      text: "人口推移",
    },
    yAxis: {
      title: {
        text: "人口数（人）",
      },
    },
    xAxis: {
      title: {
        text: "西暦（年）",
      },
    },
    plotOptions: {
      series: {
        label: {
          connectorAllowed: false,
        },
        pointInterval: 5,
        pointStart: 1960,
      },
    },
    // 都道府県ごとのデータセットをマッピングしてシリーズデータ生成
    series: populationDatasets.map((dataset) => {
      const prefName =
        prefectures.find((pref) => pref.prefCode === dataset.prefCode)?.prefName ?? "不明";
      return {
        name: prefName,
        data: dataset.data.map((data) => data.value),
        type: "line",
      };
    }),
  };
  // jsx
  //
  return <HighchartsReact highcharts={Highcharts} options={chartOptions} />;
};

export default PopulationChart;
