import React from "react";
import Dialog from "@mui/material/Dialog";
import MDButton from "components/MDButton";
import RGrid from "custom components/RGrid";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import dialogStore from "../contexts/dialogStore";

function AddFgDialog() {
  const { isOpen, handleClose } = dialogStore();
  return (
    <Dialog fullScreen open={isOpen} onClose={handleClose}>
      <AppBar sx={{ position: "relative" }}>
        <Toolbar>
          <Divider />
          <IconButton edge="start" onClick={handleClose} aria-label="close">
            <CloseIcon />
          </IconButton>
          <Typography sx={{ ml: 2, flex: 1 }} variant="h5" component="div">
            Add New Products
          </Typography>
          <MDButton color="info" variant="contained" onClick={handleClose}>
            SAVE
          </MDButton>
        </Toolbar>
      </AppBar>
      <RGrid>
        <h1>rex</h1>
      </RGrid>
    </Dialog>
  );
}

export default AddFgDialog;
