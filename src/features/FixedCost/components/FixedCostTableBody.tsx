import { FC } from "react";

import { Button, TableBody, TableCell, TableRow } from "@mui/material";

import { EDIT_BUTTON } from "@/config/config";
import { CostState } from "@/types";

/**
 * 固定費一覧のテーブルボディコンポーネントの型定義
 *
 * @property {[key:string]:string} typeList - 種別一覧
 * @property {CostState[]} userFixedCostList - ユーザー別固定費一覧
 * @property {(item:CostState)=>void} handleEdit - 編集ボタンをクリックした時に発火するコールバック
 */
type FixedCostTableBodyProps = {
  typeList: { [key: string]: string };
  userFixedCostList: CostState[];
  handleEdit: (item: CostState) => void;
};

/**
 * 固定費一覧のテーブルボディコンポーネントです。
 *
 * @param {FixedCostTableBodyProps} props
 */
const FixedCostTableBody: FC<FixedCostTableBodyProps> = (props: FixedCostTableBodyProps) => {
  const { typeList, userFixedCostList, handleEdit } = props;

  return (
    <TableBody>
      {userFixedCostList.map((item) => (
        <TableRow key={item.id}>
          <TableCell align="center" sx={{ width: "15vw" }}>
            {typeList[item.type_id]}
          </TableCell>
          <TableCell align="center" sx={{ width: "15vw" }}>
            {item.name}
          </TableCell>
          <TableCell align="center" sx={{ width: "15vw" }}>{`${item.cost.toLocaleString()} 円`}</TableCell>
          <TableCell align="center" sx={{ width: "15vw" }}>
            {item.is_half_billing == true ? "半額" : "全額"}
          </TableCell>
          <TableCell align="center" sx={{ width: "15vw" }}>
            {item.end_date != null ? item.end_date : "期限なし"}
          </TableCell>
          <TableCell align="center">
            <Button variant="contained" color="primary" onClick={() => handleEdit(item)}>
              {EDIT_BUTTON}
            </Button>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default FixedCostTableBody;
