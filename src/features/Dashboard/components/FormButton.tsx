import { Button } from "@mui/material";
import { FC } from "react";

type FormButtonProps = {
  text: string;
  handleClick: () => void;
};

const FormButton: FC<FormButtonProps> = (props) => {
  return (
    <Button
      type="submit"
      variant="contained"
      color="primary"
      onClick={props.handleClick}
      sx={{ marginLeft: 2 }}
    >
      {props.text}
    </Button>
  );
};

export default FormButton;
