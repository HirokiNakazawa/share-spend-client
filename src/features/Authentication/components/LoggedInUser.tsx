import { Typography } from "@mui/material";
import { FC } from "react";
import LogoutContainer from "@/features/Authentication/containers/LogoutContainer";

type LoggedInUserProps = {
  name: string;
};

const LoggedInUser: FC<LoggedInUserProps> = (props) => {
  return (
    <>
      <Typography>{props.name}</Typography>
      <LogoutContainer />
    </>
  );
};

export default LoggedInUser;
