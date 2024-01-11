// @ts-nocheck
import { Box, ImageList, ImageListItem, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import { useTheme } from "@emotion/react";

function RightSide() {
  const garfikQuel = { xs: "none", lg: "block" };
  const theme = useTheme();
  const itemData = [
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
    },
    {
      img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
      title: "Camera",
    },
  ];
  return (
    <Box
      component={"section"}
      sx={{
        minWidth: "516px",
        display: garfikQuel,
        paddingLeft: "20px",
        flexGrow: "auto",
        paddingTop: "20px",
        background: theme.palette.background.focuse,
      }}
    >
      <Box sx={{ position:"fixed"}}>
        <Typography variant="body1" color="inherit">
          Online Friends{" "}
        </Typography>
        <AvatarGroup
          max={4}
          sx={{ justifyContent: "center", marginTop: "20px" }}
        >
          <Avatar
          sx={{ width: 49, height: 45 }}
            alt="Remy Sharp"
            src="https://mui.com/static/images/avatar/1.jpg"
          />
          <Avatar
          sx={{ width: 49, height: 45 }}
            alt="Travis Howard"
            src="https://mui.com/static/images/avatar/2.jpg"
          />
          <Avatar
          sx={{ width: 49, height: 45 }}
            alt="Cindy Baker"
            src="https://mui.com/static/images/avatar/3.jpg"
          />
          <Avatar
          sx={{ width: 49, height: 45 }}
            alt="Agnes Walker"
            src="https://mui.com/static/images/avatar/4.jpg"
          />
          <Avatar
          sx={{ width: 49, height: 45 }}
            alt="Trevor Henderson"
            src="https://mui.com/static/images/avatar/5.jpg"
          />
        </AvatarGroup>
        <Typography variant="h6" color="inherit" sx={{ my: "30px" }}>
          Latest Photo{" "}
        </Typography>
        <ImageList
        sx={{ width: 500, height: 160, overflowY: "hidden" }}
          
          cols={3}
          rowHeight={99}
        >
          {itemData.map((item) => (
            <ImageListItem sx={{ marginRight: "10px" }} key={item.img}>
              <img
                style={{ borderRadius: "5px" }}
                srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
        <Typography variant="h6" color="inherit" sx={{ my: "30px" }}>
          Latest Conversation{" "}
        </Typography>
        <List
          sx={{ width: "100%", maxWidth: 400, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Remy Sharp"
                src="https://mui.com/static/images/avatar/1.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Brunch this weekend?"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Fadi Zerz
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Travis Howard"
                src="https://mui.com/static/images/avatar/2.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Summer BBQ"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                alt="Cindy Baker"
                src="https://mui.com/static/images/avatar/3.jpg"
              />
            </ListItemAvatar>
            <ListItemText
              primary="Oui Oui"
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    Sandra Adams
                  </Typography>
                  {" — Do you have Paris recommendations? Have you ever…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default RightSide;
