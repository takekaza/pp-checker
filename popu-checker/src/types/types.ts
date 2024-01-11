// 都道府県の検索用OptionTypeの型定義
export interface OptionType {
  label: string;
  value: number;
}

// 都道府県のデータ型定義
export type Prefecture = {
  prefCode: number; // 都道府県コード
  prefName: string; // 都道府県名
};

// 人口データの型定義
export type PopulationData = {
  label: string; // 年
  value: number; // 人口数
};

// 人口データセット用の型定義
export type PopulationDataset = {
  prefCode: number; // 都道府県コード
  data: PopulationData[]; // 人口データの配列
};

export type TextData = {
  state: number;
};
