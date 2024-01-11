import { FC } from "react";
import Select, { MultiValue } from "react-select";
import { OptionType } from "../types/types";

/*
  PrefectureSelectorコンポーネントのpropsの型定義
*/
interface PrefectureSelectorProps {
  options: OptionType[]; // Selectコンポーネントに渡すオプションの配列
  onChange: (selectedOptions: MultiValue<OptionType>) => void; // 選択肢が変更された際のイベントハンドラ
}

/*
  都道府県のリストを表示し、ユーザーが単一または複数の選択ができるようにするコンポーネント
*/
const PrefectureSelector: FC<PrefectureSelectorProps> = ({ options, onChange }) => {
  return (
    <Select
      options={options}
      isMulti // 複数選択を可能にする
      onChange={onChange}
      className="react-select-container"
      classNamePrefix="react-select"
      placeholder="都道府県を入力してください"
    />
  );
};

export default PrefectureSelector;
