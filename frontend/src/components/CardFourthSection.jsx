import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

import { CardActionArea } from "@mui/material";
import img from "../assets/Dedicated-Hosting.png";

export default function CardFourthSection() {
  return (
    <Card sx={{ maxWidth: 280 }}>
      <CardActionArea className="p-5">
        <CardMedia
          component="img"
          image={img}
          alt="Dedicated Hosting"
          className="h-52 w-40 p-10"
        />
        <CardContent>
          <h1 className="text-center font-bold text-2xl mb-4">Lizard</h1>
          <p className="px-5 text-wrap mb-4 font-serif">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
