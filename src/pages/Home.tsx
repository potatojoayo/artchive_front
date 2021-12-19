import { Container, TextField, useTheme } from "@mui/material";

import { Recommendation, WelcomeText } from "../components";

const Home = () => {
  const theme = useTheme();
  return (
    <Container
      sx={{ display: "flex", flexDirection: "column", position: "relative" }}
    >
      <WelcomeText />
      <TextField
        id="outlined-basic"
        label="SEARCH"
        variant="outlined"
        sx={{
          marginTop: "50px",
          [theme.breakpoints.down("md")]: { marginTop: "-20px" },
        }}
      ></TextField>
      <Recommendation title="New Art"></Recommendation>
    </Container>
  );
};

export default Home;
