import { Typography } from "@mui/material";
import { FC } from "react";
import LogoutContainer from "../containers/LogoutContainer";

type LoggedInUserProps = {
  name: string;
};

const LoggedInUser: FC<LoggedInUserProps> = ({ name }) => {
  return (
    <>
      <Typography>{name}</Typography>
      <LogoutContainer />
    </>
  );
};

export default LoggedInUser;
