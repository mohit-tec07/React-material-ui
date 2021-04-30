import {
  AppBar,
  Badge,
  Grid,
  IconButton,
  InputBase,
  makeStyles,
  Toolbar,
} from "@material-ui/core";
import React from "react";
import NotificationsPausedIcon from "@material-ui/icons/NotificationsPaused";
import SmsFailedIcon from "@material-ui/icons/SmsFailed";
import PowerSettingsNewIcon from "@material-ui/icons/PowerSettingsNew";
import YoutubeSearchedForIcon from "@material-ui/icons/YoutubeSearchedFor";

// pass jss
const useStyles = makeStyles({
  root: {
    backgroundColor: "#fff",
  },
  searchInput: {
    opacity: "0.6",
    padding: "0px 8px",
    fontsize: "0.8rem",
    "&:hover": {
      backgroundColor: "#f2f2f2",
    },
    "& .MuiSvgIcon": {
      marginRight: "8   px",
    },
    btn: {
      backgroundColor: "red",
    },
  },
});

export default function Header() {
  //access usestyle function
  const classes = useStyles();
  return (
    <AppBar position="static" className={classes.root}>
      <Toolbar>
        <Grid container alignItems="center">
          <Grid item sm={4}>
            <InputBase
              className={classes.searchInput}
              placeholder="Search Topic"
              startAdornment={<YoutubeSearchedForIcon fontsize="small" />}
            />
          </Grid>
          <Grid item sm={8}>
            <IconButton className={classes.btn}>
              <Badge badgeContent={8} color="secondary">
                <NotificationsPausedIcon fontsize="small" />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={7} color="primary">
                <SmsFailedIcon fontsize="small" />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge color="secondry">
                <PowerSettingsNewIcon fontsize="small" />
              </Badge>
            </IconButton>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}
