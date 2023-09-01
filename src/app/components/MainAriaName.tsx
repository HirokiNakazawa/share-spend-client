import { Typography } from "@mui/material";
import { ariaNameStyles } from "./styles";

const MainAriaName = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;

  return (
    <Typography sx={{ ...ariaNameStyles, fontSize: "28px" }}>
      {`${year}年${month}月`}
    </Typography>
  );
};

export default MainAriaName;
