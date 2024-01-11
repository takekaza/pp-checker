import { FC, useState } from "react";

// onDatasetChangeを持つPropsの型を定義
interface DataSelectorProps {
  onDatasetChange: (dataset: string) => void;
}

const DataSelector: FC<DataSelectorProps> = ({ onDatasetChange }) => {
  const [selectedDataset, setSelectedDataset] = useState("");

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const dataset = event.target.value;
    setSelectedDataset(dataset);
    onDatasetChange(dataset);
  };

  return (
    <select value={selectedDataset} onChange={handleSelectChange}>
      <option value="population">人口データ</option>
      <option value="economy">経済データ</option>
      {/* 他のデータセットオプション */}
    </select>
  );
};

export default DataSelector;
