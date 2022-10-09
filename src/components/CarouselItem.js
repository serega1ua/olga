import React from "react";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
const CarouselItem = ({ item }) => {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "column-reverse",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      <Typography variant="p" component="p">
        {item.description}
      </Typography>
      <Typography variant="h2" component="h2">
        {item.name}
      </Typography>
      <img src={item.img} alt={item.name} height="auto" width="300px" />
      {/* <Button className="CheckButton">Check it out!</Button> */}
    </Paper>
  );
};

export default CarouselItem;
