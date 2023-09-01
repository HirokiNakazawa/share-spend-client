const paperStyles = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "100%",
  position: "relative",
};

const ariaNameStyles = {
  position: "absolute",
  top: 0,
  left: 0,
  padding: "16px",
};

const mainRightAriaStyles = {
  box: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  head: {
    fontSize: "24px",
  },
  body: {
    fontSize: "28px",
  },
};

export { paperStyles, ariaNameStyles, mainRightAriaStyles };
