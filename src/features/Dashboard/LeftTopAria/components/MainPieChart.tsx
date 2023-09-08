import { MonthlyCostByTypeState } from "@/types";
import { Box } from "@mui/material";
import { FC } from "react";
import { Cell, Pie, PieChart } from "recharts";
import { colors } from "@/features/Dashboard/LeftTopAria/colors";

type MainPieChartProps = {
  data: MonthlyCostByTypeState[];
};

const MainPieChart: FC<MainPieChartProps> = (props) => {
  return (
    <Box sx={{ marginLeft: "25%" }}>
      <PieChart width={500} height={500}>
        <Pie
          data={props.data}
          dataKey="total_cost"
          nameKey="type_name"
          cx="50%"
          cy="50%"
          outerRadius={200}
          startAngle={90}
          endAngle={-270}
          labelLine={false}
        >
          {props.data.map((entry, index) => (
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
