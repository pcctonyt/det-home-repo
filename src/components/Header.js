import React, { useState } from "react";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import LaptopWindowsIcon from "@mui/icons-material/LaptopWindows";
import { NavLink } from "react-router-dom";

const Header = () => {
    const [ value, setValue ] = useState();
  return (
    <div>
        <AppBar sx={{backgroundColor: "#232F3D"}} position="sticky">
            <Toolbar>
                <Typography>
                    <LaptopWindowsIcon />Welcome to Deterrence!
                </Typography>
                <Tabs sx={{ml: "auto"}} textColor="inherit" indicatorColor="secondary" value={value} onChange={(e, value) =>setValue(value)}>
                    <Tab LinkComponent={NavLink} to="/" label="Home" />
                    <Tab LinkComponent={NavLink} to="/online" label="Online" />
                    <Tab LinkComponent={NavLink} to="/limited" label="Limited" />
                    <Tab LinkComponent={NavLink} to="/ultimate" label="Ultimate" />
                    <Tab LinkComponent={NavLink} to="/play" label="Play Now!" />
                    <Tab LinkComponent={NavLink} to="/forum" label="Forum" />
                    <Tab LinkComponent={NavLink} to="/contact" label="Contact Us" />
                </Tabs>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Header;