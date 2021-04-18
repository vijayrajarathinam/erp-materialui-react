import React from "react";
import { AppBar, Avatar, Toolbar, IconButton, InputBase, Badge, Typography, Drawer,List, ListItem, ListItemText, Divider } from "@material-ui/core";
import { makeStyles, fade } from "@material-ui/core/styles";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import MailIcon from "@material-ui/icons/MailOutline";
import MoreIcon from "@material-ui/icons/MoreVert";
import NotificationsIcon from "@material-ui/icons/NotificationsOutlined";
import ListItemIcon from "@material-ui/icons/List";
import InboxIcon from "@material-ui/icons/Inbox";

import "./App.css";

const useStyles = makeStyles((theme) => ({
  title: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade("#dce0e3", 0.15),
    "&:hover": {
      backgroundColor: fade("#dce0e3", 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: { color: "inherit" },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: { width: "30ch" },
  },
  grow: { flexGrow: 1 },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },
}));

function App() {
  const classes = useStyles();
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <IconButton>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            ERP Retail
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search...."
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
          </div>
          <div className={classes.grow}></div>
          {/* <div className={classes.sectionDesktop}>
            <IconButton>
              <Badge badgeContent={"6"} color="secondary">
                <MailIcon />
              </Badge>
            </IconButton>
            <IconButton>
              <Badge badgeContent={"+99"} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </div>
          <div className={classes.sectionMobile}> 
           <IconButton>
              <MoreIcon />
            </IconButton>
          </div> */}
          <IconButton>
            <Badge badgeContent={"+9"} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton>
            <Avatar>VR</Avatar>
          </IconButton>
        </Toolbar>
      </AppBar>


      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </div>
      </Drawer>
      {/* <main className={classes.content}>
        <Toolbar />
        content */}
      {/* </main> */}
    </>
  );
}

export default App;
