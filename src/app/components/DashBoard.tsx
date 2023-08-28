import { Container, Grid, Paper, Typography } from "@mui/material";
import { FC } from "react";
import TypeRegistrationAria from "./TypeRegistrationAria";
import CostRegistrationAria from "./CostRegistrationAria";
import CostMonthlyListAria from "./CostMonthlyListAria";

const DashBoard: FC = () => {
  return (
    <>
      <Container style={{ maxWidth: "90%" }}>
        <Grid container spacing={1} mt={1}>
          <Grid item xs={8} height="60vh">
            <Paper elevation={3} sx={{ height: "100%" }}>
              <Typography>メインエリア</Typography>
            </Paper>
          </Grid>
          <Grid item xs={4} height="60vh">
            <CostMonthlyListAria />
          </Grid>
          <Grid item xs={4} height="30vh">
            <TypeRegistrationAria />
          </Grid>
          <Grid item xs={8} height="30vh">
            <CostRegistrationAria />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default DashBoard;
