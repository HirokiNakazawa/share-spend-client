import { Button } from "@mui/material";
import { FC } from "react";

type ModalButtonProps = {
  text: string;
  handleClick: () => void;
};

const ModalButton: FC<ModalButtonProps> = (props) => {
  return (
    <Button
      type="submit"
      variant="contained"
      color="primary"
      onClick={props.handleClick}
    >
      {props.text}
    </Button>
  );
};

export default ModalButton;
