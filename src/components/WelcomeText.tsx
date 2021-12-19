import { Box, Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";

const WelcomeText = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        marginTop: "50px",
      }}
    >
      <Box
        sx={{
          [theme.breakpoints.down("md")]: { display: "none" },
          cursor: "default",
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          sx={{
            userSelect: "none",
          }}
        >
          THE LIBRARY
        </Typography>
        <Typography
          variant="h2"
          component="h2"
          sx={{ marginLeft: "2rem", userSelect: "none" }}
        >
          OF CLASSIC ART
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Typography
            variant="h2"
            component="h2"
            sx={{ marginLeft: "4rem", userSelect: "none" }}
          >
            WELCOME TO
          </Typography>
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ ease: "easeInOut", duration: 3, repeat: Infinity }}
          >
            <Typography
              variant="h2"
              component="h2"
              sx={{ userSelect: "none", marginLeft: 3 }}
            >
              <u>ARTCHIVE</u>
            </Typography>
          </motion.div>
        </Box>
      </Box>
    </Box>
  );
};

export default WelcomeText;
