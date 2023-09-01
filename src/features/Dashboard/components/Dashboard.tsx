import { Container, Grid } from "@mui/material";
import { FC } from "react";
import MainAria from "@/components/MainAria";
// import CostMonthlyListAria from "../../../components/CostMonthlyListAria";
// import TypeRegistrationAria from "@/components/TypeRegistrationAria";
// import CostRegistrationAria from "../../../components/CostRegistrationAria";
import TypeRegistration from "../LeftBottomAria/components/TypeRegistration";

const Dashboard: FC = () => {
  return (
    <Container style={{ maxWidth: "90%" }}>
      <Grid container spacing={1} mt={1}>
        <Grid item xs={8} height="60vh">
          <MainAria />
        </Grid>
        <Grid item xs={4} height="60vh">
          {/* <CostMonthlyListAria /> */}
        </Grid>
        <Grid item xs={4} height="30vh">
          {/* <TypeRegistrationAria /> */}
          <TypeRegistration />
        </Grid>
        <Grid item xs={8} height="30vh">
          {/* <CostRegistrationAria /> */}
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
