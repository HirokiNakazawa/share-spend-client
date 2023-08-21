import { Container, Grid, Paper, Typography } from "@mui/material";
import { FC } from "react";

const DashBoard: FC = () => {
  return (
    <>
      <Container style={{ maxWidth: "90%" }}>
        <Grid container spacing={1} mt={1}>
          <Grid item xs={8} height="60vh">
            <Paper elevation={3} sx={{ height: "100%" }}>
              <Typography>hoge</Typography>
            </Paper>
          </Grid>
          <Grid item xs={4}>
            <Paper elevation={3} sx={{ height: "100%" }}>
              <Typography>hoge</Typography>
            </Paper>
          </Grid>
          <Grid item xs={4} height="30vh">
            <Paper elevation={3} sx={{ height: "100%" }}>
              <Typography>hoge</Typography>
            </Paper>
          </Grid>
          <Grid item xs={8}>
            <Paper elevation={3} sx={{ height: "100%" }}>
              <Typography>hoge</Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default DashBoard;
