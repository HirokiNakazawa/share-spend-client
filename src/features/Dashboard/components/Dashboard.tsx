import { Container, Grid } from "@mui/material";
import { FC } from "react";
// import MainAria from "@/components/MainAria";
// import CostMonthlyListAria from "../../../components/CostMonthlyListAria";
// import TypeRegistrationAria from "@/components/TypeRegistrationAria";
// import CostRegistrationAria from "../../../components/CostRegistrationAria";
import TypeRegistration from "../LeftBottomAria/components/TypeRegistration";
import CostRegistration from "../RightBottomAria/components/CostRegistration";
import MonthlyList from "../RightTopAria/components/MonthlyList";

const Dashboard: FC = () => {
  return (
    <Container style={{ maxWidth: "90%" }}>
      <Grid container spacing={1} mt={1}>
        <Grid item xs={8} height="60vh">
          {/* <MainAria /> */}
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
