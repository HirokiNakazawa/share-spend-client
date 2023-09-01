"use client";

import { Box } from "@mui/material";
import { FC } from "react";
import { PieChart, Pie, Cell } from "recharts";
import { useRecoilValue } from "recoil";
import { monthlyCostByTypeState } from "../recoil/monthlyState";
import { colors } from "./colors";

const MainPieChart: FC = () => {
  const monthlyCostByType = useRecoilValue(monthlyCostByTypeState);

  return (
    <Box sx={{ marginLeft: "25%" }}>
      <PieChart width={500} height={500}>
        <Pie
          data={monthlyCostByType}
          dataKey="total_cost"
          nameKey="type_name"
          cx="50%"
          cy="50%"
          outerRadius={200}
          startAngle={90}
          endAngle={-270}
          labelLine={false}
        >
          {monthlyCostByType.map((entry, index) => (
            <Cell
              key={`cell-${entry.type_name}`}
              fill={colors[index % colors.length]}
            />
          ))}
        </Pie>
      </PieChart>
    </Box>
  );
};

export default MainPieChart;
