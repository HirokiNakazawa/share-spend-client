import { FC } from "react";

import { Box } from "@mui/material";
import { Cell, Pie, PieChart } from "recharts";

import { MonthlyCostByTypeState } from "@/types";
import { colors } from "@/features/Dashboard/LeftTopAria/colors";

/**
 * メインエリアの円グラフコンポーネントの型定義
 *
 * @property {MonthlyCostByTypeState[]} data - 月別の種別毎支出金額の合計一覧
 */
type MainPieChartProps = {
  data: MonthlyCostByTypeState[];
};

/**
 * メインエリアの円グラフコンポーネントです。
 *
 * @param {MainPieChartProps} props
 */
const MainPieChart: FC<MainPieChartProps> = (props: MainPieChartProps) => {
  const { data } = props;

  return (
    <Box sx={{ marginLeft: "25%" }}>
      <PieChart width={500} height={500}>
        <Pie
          data={data}
          dataKey="total_cost"
          nameKey="type_name"
          cx="50%"
          cy="50%"
          outerRadius={200}
          startAngle={90}
          endAngle={-270}
          labelLine
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${entry.type_name}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
      </PieChart>
    </Box>
  );
};

export default MainPieChart;
