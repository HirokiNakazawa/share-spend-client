"use client";

import { FC } from "react";

import {
  Box,
  Divider,
  FormControl,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useRecoilState, useRecoilValue } from "recoil";
import { limitDateState, selectDateState, typeListState, userFixedCostListState, userState } from "@/recoil";
import { CostState, SelectDateState, UserState } from "@/types";
import SelectTypeContainer from "@/features/Dashboard/RightBottomAria/containers/SelectTypeContainer";
import InputCostContainer from "@/features/Dashboard/RightBottomAria/containers/InputCostContainer";
import InputCostNameContainer from "@/features/Dashboard/RightBottomAria/containers/InputCostNameContainer";
import CheckHalfBillingContainer from "@/features/Dashboard/RightBottomAria/containers/CheckHalfBillingContainer";
import CheckFullBillingContainer from "@/features/Dashboard/RightBottomAria/containers/CheckFullBillingContainer";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { ja } from "date-fns/locale";
import FormButton from "@/features/Form/components/FormButton";
import { ADD_BUTTON } from "@/config/config";
import { CreateFixedCostFunctions, useCreateFixedCost } from "../hooks/useCreateFixedCost";

/**
 * 固定費関連ページコンポーネントです。
 */
const FixedCost: FC = () => {
  const user = useRecoilValue<UserState>(userState);
  // const selectDate = useRecoilValue<SelectDateState>(selectDateState);
  const typeList = useRecoilValue<{ [key: string]: string }>(typeListState);
  const userFixedCostList = useRecoilValue<CostState[]>(userFixedCostListState);
  const [limitDate, setLimitDate] = useRecoilState<Date | null>(limitDateState);

  const createFixedCostService: CreateFixedCostFunctions = useCreateFixedCost();

  const handleChangeDate = (date: Date | null): void => {
    setLimitDate(date);
  };

  const handleCreateFixedCost = async (): Promise<void> => {
    await createFixedCostService.createFixedCost();
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box sx={{ display: "flex", height: "25vh", alignItems: "center", justifyContent: "center" }}>
        <FormControl>
          <Box sx={{ display: "flex", flexDirection: "row" }}>
            <SelectTypeContainer width="10vw" />
            <InputCostContainer width="10vw" />
            <InputCostNameContainer width="10vw" />
            <CheckHalfBillingContainer label="半額請求" />
            <CheckFullBillingContainer label="全額請求" />
            <Box sx={{ marginLeft: 2 }}>
              <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ja}>
                <DatePicker label="期限" value={limitDate} onChange={handleChangeDate} />
              </LocalizationProvider>
            </Box>
            <FormButton text={ADD_BUTTON} handleClick={handleCreateFixedCost} />
          </Box>
        </FormControl>
      </Box>
      <Divider orientation="horizontal" sx={{ border: "1px solid lightGray" }} />
      <Box sx={{ height: "65vh" }}>
        <TableContainer sx={{ display: "flex" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align="center" sx={{ width: "15vw" }}>
                  種別
                </TableCell>
                <TableCell align="center" sx={{ width: "20vw" }}>
                  品名
                </TableCell>
                <TableCell align="center" sx={{ width: "10vw" }}>
                  金額
                </TableCell>
                <TableCell align="center" sx={{ width: "10vw" }}>
                  請求種別
                </TableCell>
                <TableCell align="center" sx={{ width: "10vw" }}>
                  期限
                </TableCell>
                <TableCell align="center" sx={{ width: "15vw" }}>
                  編集
                </TableCell>
              </TableRow>
            </TableHead>
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
                  <TableCell></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
};

export default FixedCost;
