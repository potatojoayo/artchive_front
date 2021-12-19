import { Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme, Divider } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { useAppSelector } from "./hooks";
import { RootState } from "./types";

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import { AppBar } from "./components";

const App = () => {
  const themeState = useAppSelector((state: RootState) => state.theme);
  const theme = createTheme(themeState.theme);
  return (
    <div className={themeState.mode === "DARK" ? "DARK" : "LIGHT"}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar />
        <Divider />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
};

export default App;
