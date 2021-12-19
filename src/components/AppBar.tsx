import { AppBar, Box, Toolbar, Button, IconButton, Badge } from "@mui/material";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import NotificationsIcon from "@mui/icons-material/Notifications";
import PersonIcon from "@mui/icons-material/Person";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import { useAppSelector, useAppDispatch } from "../hooks";
import { toggleTheme } from "../store/theme/theme.slice";
import { RootState } from "../types";

const MyAppBar = () => {
  const theme = useAppSelector((state: RootState) => state.theme);
  const dispatch = useAppDispatch();
  return (
    <AppBar color="transparent" elevation={0} position="static">
      <Toolbar>
        <Button
          startIcon={<AccountBalanceIcon fontSize="medium" />}
          size="large"
        >
          ARTCHIVE
        </Button>
        <Box sx={{ flexGrow: 1 }} />
        <Box>
          <Button variant="text" size="large">
            HOME
          </Button>
          <Button variant="text" size="large">
            GALLERY
          </Button>
          <Button variant="text" size="large">
            EXHIBITION
          </Button>
        </Box>
        <Box sx={{ flexGrow: 1 }} />
        <Box>
          <IconButton
            onClick={() => {
              dispatch(toggleTheme());
              console.log(theme);
            }}
          >
            <LightbulbIcon fontSize="medium" color="primary" />
          </IconButton>
          <IconButton color="primary">
            <Badge badgeContent={0} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton color="primary">
            <PersonIcon fontSize="medium" sx={{ fontSize: "27px" }} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default MyAppBar;
