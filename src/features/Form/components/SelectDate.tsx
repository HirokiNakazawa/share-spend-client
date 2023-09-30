import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { ja } from "date-fns/locale";
import { FC } from "react";

/**
 * DatePickerコンポーネントの型定義
 *
 * @property {string} label - DatePickerのラベル
 * @property {Date | null} date - 日付
 * @property {(date: Date | null) => void} - 日付選択時に発火するコールバック
 */
type SelectDateProps = {
  label: string;
  date: Date | null;
  handleChange: (date: Date | null) => void;
};

/**
 * DatePickerコンポーネントです。
 */
const SelectDate: FC<SelectDateProps> = (props) => {
  const { label, date, handleChange } = props;

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ja}>
      <DatePicker label={label} value={date} onChange={handleChange} />
    </LocalizationProvider>
  );
};

export default SelectDate;
