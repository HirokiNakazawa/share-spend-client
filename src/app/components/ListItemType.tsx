import { ListItemText, Typography } from "@mui/material";
import { FC } from "react";

type ListItemTypePorps = {
  type: string;
};

const ListItemType: FC<ListItemTypePorps> = (props) => {
  return (
    <ListItemText
      primary={<Typography sx={{ fontSize: "20px" }}>{props.type}</Typography>}
      sx={{ width: "5vw" }}
    />
  );
};

export default ListItemType;
