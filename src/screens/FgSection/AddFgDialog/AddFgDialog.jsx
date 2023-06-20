import React, { useRef } from "react";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import CloseIcon from "@mui/icons-material/Close";
import dialogStore from "../contexts/dialogStore";

function AddFgDialog() {
  const { isOpen, handleClose } = dialogStore();

  // Form refs
  const productRef = useRef();
  const sizeRef = useRef();
  const initialRef = useRef();

  return (
    <Dialog fullWidth="lg" open={isOpen} onClose={handleClose}>
      <Box
        sx={{
          width: "100%",
          height: "100%",
        }}
      >
        <Box
          sx={{
            width: "100%",
            height: "50px",
            display: "flex",
            alignItems: "center",
          }}
        >
          <MDTypography variant="h6" sx={{ marginLeft: "15px" }}>
            Add New Product
          </MDTypography>
          <CloseIcon
            onClick={handleClose}
            sx={{ position: "absolute", right: "1rem", cursor: "pointer" }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            paddingLeft: "3%",
            paddingRight: "3%",
            marginTop: "1rem",
            gap: "2rem",
            marginBottom: "1.25rem",
            height: "200px",
          }}
        >
          <MDInput ref={productRef} fullWidth type="text" label="Product name" />
          <Box sx={{ display: "flex", width: "100%", gap: "1rem" }}>
            <MDInput ref={sizeRef} fullWidth type="number" label="Packaging size" />
            <MDInput ref={initialRef} fullWidth type="number" label="Initial Stocks" />
          </Box>
          <MDButton color="info" variant="contained" fullWidth>
            Save
          </MDButton>
        </Box>
      </Box>
    </Dialog>
  );
}

export default AddFgDialog;
