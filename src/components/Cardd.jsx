// @ts-nocheck
import { Box, Checkbox } from "@mui/material";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Menuu from "./Menuu";
import React from "react";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import { useTheme } from "@emotion/react";

function Cardd() {
  const theme = useTheme()
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const myCards = [
    {
      letter: "E",
      color: "#4169e1",
      userName: "Elias Zerz",
      imgLink:
        "https://images.pexels.com/photos/3480792/pexels-photo-3480792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      letter: "F",
      color: "#800080",
      userName: "Fadi Zerz",
      imgLink:
        "https://images.pexels.com/photos/1549280/pexels-photo-1549280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      letter: "A",
      color: "#008080",
      userName: "Alan Rusek",
      imgLink:
        "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      letter: "R",
      color: "#4169e1",
      userName: "Rita Jamal",
      imgLink:
        "https://images.pexels.com/photos/19569670/pexels-photo-19569670/free-photo-of-green-garden-with-pond-near-old-historic-building.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
  ];
  return (
    <Box sx={{ flexGrow: "2" }}>
      {myCards.map((card, index) => {
        return (
          <Card key={index} sx={{ maxWidth: 345, mx: "auto", my: 5,  minWidth:{xs:"95%" , sm :"345px"}} }>
            <CardHeader
              avatar={
                <Avatar sx={{ color:theme.palette.getContrastText(card.color ), bgcolor: card.color }} aria-label="recipe">
                  {card.letter}
                </Avatar>
              }
              action={
                <IconButton
                  aria-label="settings"
                  id="basic-button"
                  aria-controls={open ? "basic-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  onClick={handleClick}
                >
                  <MoreVertIcon />
                </IconButton>
              }
              title={card.userName}
              subheader="September 14, 2016"/>
            <CardMedia
              component="img"
              height="194"
              image={card.imgLink}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi ratione voluptate optio unde? Sed ducimus delectus,
                placeat voluptatibus ipsa ullam.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
          <Box sx={{flexGrow:"1"}}>
                <Checkbox
                  {...label}
                  icon={<FavoriteBorder />}
                  checkedIcon={<Favorite sx={{color :"red"}} />}
                />
            
                <IconButton  aria-label="share">
                  <ShareIcon />
                </IconButton>
          </Box >
 
              <Checkbox
                {...label}
                icon={<BookmarkBorderIcon />}
                checkedIcon={<BookmarkIcon />}
              />
            </CardActions>
            <Menuu
              open={open}
              // @ts-ignore
              handleClick={handleClick}
              handleClose={handleClose}
              anchorEl={anchorEl}
            />
          </Card>
        );
      })}
    </Box>
  );
}

export default Cardd;
