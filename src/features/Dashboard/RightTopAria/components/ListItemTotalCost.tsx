import { ListItemText, Typography } from "@mui/material";
import { FC } from "react";

type ListItemTotalCostProps = {
  totalCost: number;
};

const ListItemTotalCost: FC<ListItemTotalCostProps> = (props) => {
  return (
    <ListItemText
      primary={
        <Typography sx={{ fontSize: "20px" }}>
          {`${props.totalCost.toLocaleString()} 円`}
        </Typography>
      }
      sx={{ width: "5vw", textAlign: "right", marginRight: 10 }}
    />
  );
};

export default ListItemTotalCost;