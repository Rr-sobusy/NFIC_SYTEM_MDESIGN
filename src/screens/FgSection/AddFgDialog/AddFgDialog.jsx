import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import CloseIcon from "@mui/icons-material/Close";
import { useAlert } from "react-alert";
import axios from "axios";
import apiUrl from "API";
import dialogStore from "../contexts/dialogStore";
import useFgStore from "../contexts/fgStore";

function AddFgDialog() {
  // context
  const { isOpen, handleClose } = dialogStore();

  // context
  const { handleRefetch } = useFgStore();

  // Form states
  const [productNames, setProductName] = useState("");
  const [packagingSizes, setPackagingSize] = useState(0);
  const [initialStockss, setInitialStocks] = useState(0);

  const alertCustom = useAlert();

  const submitHandler = () => {
    if (productNames && packagingSizes && initialStockss) {
      axios({
        method: "POST",
        url: `${apiUrl}/addnewproduct`,
        headers: { "content-type": "application/x-www-form-urlencoded" },
        data: {
          productName: productNames,
          packagingSize: packagingSizes,
          initialStocks: initialStockss,
        },
      })
        .then(handleRefetch)
        .then(handleClose)
        .then(() => {
          alertCustom.show("New Product Added!");
        });
    } else {
      alertCustom.show("Please fill out the missing fields!", {
        type: "error",
      });
    }
  };

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
          <MDInput
            onChange={(e) => setProductName(e.target.value)}
            fullWidth
            type="text"
            label="Product name"
          />
          <Box sx={{ display: "flex", width: "100%", gap: "1rem" }}>
            <MDInput
              onChange={(e) => setPackagingSize(e.target.value)}
              fullWidth
              type="number"
              label="Packaging size"
            />
            <MDInput
              onChange={(e) => setInitialStocks(e.target.value)}
              fullWidth
              type="number"
              label="Initial Stocks"
            />
          </Box>
          <MDButton color="info" onClick={submitHandler} variant="contained" fullWidth>
            Save
          </MDButton>
        </Box>
      </Box>
    </Dialog>
  );
}

export default AddFgDialog;
