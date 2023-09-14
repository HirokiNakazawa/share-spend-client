import { FC } from "react";

import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";

/**
 * 種別のセレクトボックスコンポーネントの型定義
 *
 * @property {string} id - セレクトボックスの固有ID
 * @property {string} labelId - セレクトボックスのラベルID
 * @property {string} labelName - セレクトボックスのラベル名
 * @property {string} selectType - 種別
 * @property {string} width - セレクトボックスの横幅
 * @property {[key:string]:string} typeList - 種別一覧
 * @property {(e: SelectChangeEvent<string>) => void} handleChange - セレクトボックス選択時に発火するコールバック
 */
type SelectTypeProps = {
  id: string;
  labelId: string;
  labelName: string;
  selectType: string;
  width: string;
  typeList: { [key: string]: string };
  handleChange: (e: SelectChangeEvent<string>) => void;
};

/**
 * 種別のセレクトボックスコンポーネントです。
 *
 * @param {SelectTypeProps} props
 */
const SelectType: FC<SelectTypeProps> = (props: SelectTypeProps) => {
  const { id, labelId, labelName, selectType, width, typeList, handleChange } = props;

  return (
    <FormControl>
      <InputLabel id={labelId}>{labelName}</InputLabel>
      <Select
        id={id}
        labelId={labelId}
        label="種別"
        name="type"
        value={selectType}
        onChange={handleChange}
        sx={{ width: width }}
      >
        {Object.entries(typeList).map(([key, value]) => (
          <MenuItem key={key} value={value}>
            {value}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectType;
