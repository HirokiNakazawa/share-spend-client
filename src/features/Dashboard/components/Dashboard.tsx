import { Container, Grid, Toolbar } from "@mui/material";
import { FC } from "react";
import MainAria from "@/features/Dashboard/LeftTopAria/components/MainAria";
import MonthlyList from "@/features/Dashboard/RightTopAria/components/MonthlyList";
import TypeRegistration from "@/features/Dashboard/LeftBottomAria/components/TypeRegistration";
import CostRegistration from "@/features/Dashboard/RightBottomAria/components/CostRegistration";

const Dashboard: FC = () => {
  return (
    <Container style={{ maxWidth: "90%" }}>
      <Grid container spacing={1} mt={1}>
        <Grid item xs={8} height="60vh">
          <MainAria />
        </Grid>
        <Grid item xs={4} height="60vh">
          <MonthlyList />
        </Grid>
        <Grid item xs={4} height="30vh">
          <TypeRegistration />
        </Grid>
        <Grid item xs={8} height="30vh">
          <CostRegistration />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
