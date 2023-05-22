import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import imageDefault from "../assets/images/imageDefault.webp";
import { format } from "date-fns";
import { Link } from "react-router-dom";



const NoticiasCard = (props) => {
  return (
    <Card className="w-80 h-128 border-gray-700">
      {props.urlToImage ? (
        <CardMedia sx={{ height: 140 }} image={props.urlToImage} />
      ) : (
        <CardMedia sx={{ height: 140 }} image={imageDefault} />
      )}
      <CardContent className="h-60 overflow-hidden text-white bg-gray-700">
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="subtitle2" component="div">
          <p>
            Publicado el {format(new Date(props.publishedAt), "dd/MM/yyyy - HH:mm a")}
          </p>
        </Typography>
        <Typography
          variant="body2"
          className="overflow-y-auto text-gray-400"
        >
          {props.description}
        </Typography>
      </CardContent>
      <CardActions className="flex justify-center bg-gray-700">
          <Button  variant="contained" color="secondary" onClick={props.onLeerClick}>Leer</Button>
      </CardActions>
    </Card>
  );
};

export default NoticiasCard;
