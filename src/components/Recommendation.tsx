import { Box, Typography } from "@mui/material";
import { FC } from "react";
import Carousel from "./Carousel";

interface RecommendationProps {
  title: string;
}

const Recommendation: FC<RecommendationProps> = ({ title }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", marginTop: "30px" }}>
      <Typography variant="h4" component="h2" sx={{ userSelect: "none" }}>
        {title}
      </Typography>
      <Carousel />
    </Box>
  );
};

export default Recommendation;
