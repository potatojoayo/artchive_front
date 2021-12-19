import { ThemeOptions } from "@mui/material";

export type ThemeMode = "DARK" | "LIGHT";

export interface Theme {
  theme: ThemeOptions;
  mode: ThemeMode;
}
