import { Typography } from "@mui/material";

import { UtilsFunctions, useUtils } from "@/hooks/useUtils";
import { ariaNameStyles } from "../../styles/dashboardStyles";

/**
 * ダッシュボードメインエリアの年月表示領域コンポーネントです。
 */
const AriaName = () => {
  const utils: UtilsFunctions = useUtils();

  const year = utils.getDate();
  const month = utils.getMonth();

  return <Typography sx={{ ...ariaNameStyles, fontSize: "28px" }}>{`${year}年${month}月`}</Typography>;
};

export default AriaName;
