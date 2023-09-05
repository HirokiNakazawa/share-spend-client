import { createTheme } from "@mui/material";

export const customTheme = createTheme({
  components: {
    MuiTableCell: {
      styleOverrides: {
        root: {
          paddingTop: 5,
          paddingBottom: 5,
        },
      },
    },
  },
});
