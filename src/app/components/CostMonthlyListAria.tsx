import { List, ListItem, ListItemText, Paper, Typography } from "@mui/material";
import { FC } from "react";
import { ariaNameStyles } from "./styles";
import { COST_MONTHLY_LIST_ARIA } from "@/config/config";

const CostMonthlyListAria: FC = () => {
  return (
    <Paper
      elevation={3}
      sx={{
        height: "100%",
        position: "relative",
        overflowX: "hidden",
        overflowY: "auto",
      }}
    >
      <Typography sx={ariaNameStyles}>{COST_MONTHLY_LIST_ARIA}</Typography>
      <List sx={{ position: "relative", top: 48, left: 16 }}>
        <ListItem>
          <ListItemText>家賃</ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>食費</ListItemText>
        </ListItem>
      </List>
    </Paper>
  );
};

export default CostMonthlyListAria;
