import { createSlice } from "@reduxjs/toolkit";
import { RootState, Theme } from "../../types";

const initialState: Theme = {
  mode: "LIGHT",
  theme: {
    palette: {
      primary: {
        main: "#4a4a4a",
        dark: "#D7D6D4",
        light: "#D7D6D4",
        contrastText: "#4a4a4a",
      },
      secondary: {
        main: "#EE6C4D",
        contrastText: "#f9f8f7",
        dark: "#9e9e9e",
      },
      background: {
        default: "#D7D6D4",
        paper: "#dcdcdc",
      },
      text: {
        primary: "#555",
      },
    },
    typography: {
      fontFamily: ["Ubuntu", "sans-serif"].join(","),
    },
  },
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state) => {
      if (state.mode === "DARK") {
        state.mode = "LIGHT";
        state.theme = {
          palette: {
            primary: {
              main: "#4a4a4a",
              dark: "#D7D6D4",
              light: "#D7D6D4",
              contrastText: "#4a4a4a",
            },
            secondary: {
              main: "#EE6C4D",
              contrastText: "#f9f8f7",
              dark: "#9e9e9e",
            },
            background: {
              default: "#D7D6D4",
              paper: "#dcdcdc",
            },
            text: {
              primary: "#555",
            },
          },
          typography: {
            fontFamily: ["Ubuntu", "sans-serif"].join(","),
          },
        };
      } else {
        state.mode = "DARK";
        state.theme = {
          palette: {
            primary: {
              main: "#D7D6D4",
              dark: "#D7D6D4",
              light: "#D7D6D4",
              contrastText: "#4a4a4a",
            },
            secondary: {
              main: "#EE6C4D",
              contrastText: "#f9f8f7",
              dark: "#9e9e9e",
            },
            background: {
              default: "#4a4a4a",
              paper: "#dcdcdc",
            },
            text: {
              primary: "#D7D6D4",
            },
          },
          typography: {
            fontFamily: ["Ubuntu", "sans-serif"].join(","),
          },
        };
      }
    },
  },
});

export const { toggleTheme } = themeSlice.actions;
export const selectTheme = (state: RootState) => state.theme;

export default themeSlice.reducer;
