import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import MDTypography from "components/MDTypography";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import MDButton from "components/MDButton";
import DataTable from "examples/Tables/DataTable";
import MDInput from "components/MDInput";
import RSelect from "custom components/RSelect";
import RInput from "custom components/RInput";
import { v4 as uuidV4 } from "uuid";
import axios from "axios";
import { useAlert } from "react-alert";
import apiUrl from "API";
import useFgStore from "screens/FgSection/contexts/fgStore";
import useOutboundDialog from "../context/outboundDialog";
import useSalesStore from "../context/salesStore";

function OutboundDialog() {
  const initialOrders = {
    id: uuidV4(),
    productId: "",
    quantity: null,
  };
  // Orders state
  const [orders, setOrders] = useState([initialOrders]);

  // Customer Name
  const [custName, setCustName] = useState("");

  // Contexts
  const { isOpen, handleClose } = useOutboundDialog();
  const { fgDatas } = useFgStore();
  const { handleRefetch } = useSalesStore();

  const customAlert = useAlert();

  const resetStates = () => {
    setOrders([initialOrders]);
    setCustName("");
  };

  const submitHandler = () => {
    // Extract the required json object -- productId and quantity
    const mapped = orders.map(({ productId, quantity }) => ({ productId, quantity }));
    // console.log(JSON.stringify(mapped));
    axios({
      method: "POST",
      url: `${apiUrl}/addnewsalesinstance`,
      headers: { "content-type": "application/x-www-form-urlencoded" },
      data: {
        customerName: custName,
        salesItems: JSON.stringify(mapped),
      },
    })
      .then(handleRefetch)
      .then(() => {
        customAlert.show("Outbounded successfully");
      })
      .then(() => {
        handleClose();
        resetStates();
      });
  };

  const addOrderHandler = () => {
    setOrders((prev) => [...prev, { id: uuidV4(), productId: "", quantity: null }]);
  };

  const removeOrderHandler = (id) => {
    const filteredOrder = orders.filter((filteredValue) => filteredValue.id !== id);
    setOrders(filteredOrder);
  };

  const handleChangeInput = (id, event) => {
    const newInputFields = orders.map((i) => {
      const I = i;
      if (id === I.id) {
        I[event.target.name] = event.target.value;
      }
      return I;
    });
    setOrders(newInputFields);
  };

  return (
    <Dialog sx={{ marginRight: -2 }} fullScreen open={isOpen} onClose={handleClose}>
      <AppBar sx={{ position: "fixed" }}>
        <Toolbar sx={{ backgroundColor: "#2880EB", boxShadow: "0 4px 2px -2px gray" }}>
          <MDTypography color="white" sx={{ flex: 1, marginLeft: 2 }} variant="h5">
            Outbound Product/s
          </MDTypography>
          <MDButton onClick={addOrderHandler} color="default">
            Add New Order
          </MDButton>
        </Toolbar>
      </AppBar>
      <Box sx={{ display: "grid", margin: "75px 120px 25px 120px" }}>
        <MDTypography sx={{ margin: ".5rem 2.5rem 0 1.5rem" }} variant="h6">
          Customer Name
        </MDTypography>
        <MDInput
          onChange={(e) => setCustName(e.target.value)}
          label="Enter Customer Name"
          sx={{ margin: "0 2.5rem 0 1.5rem", width: "50%" }}
        />
        <DataTable
          table={{
            columns: [
              {
                Header: "Product Name",
                accessor: "product_name",
                width: "25%",
              },
              {
                Header: "Quantity Outbounded (bgs.)",
                accessor: "quantity",
                width: "25%",
              },
              {
                Header: "Action",
                accessor: "action",
                width: "10%",
              },
            ],
            rows: orders.map((value) => ({
              product_name: (
                <RSelect
                  name="productId"
                  key={value.id}
                  value={value.productName}
                  onChange={(event) => handleChangeInput(value.id, event)}
                >
                  <option value="">Select Product</option>
                  {fgDatas.map((values) => (
                    <option key={values.product_id} value={values.product_id}>
                      {values.product_name}
                    </option>
                  ))}
                </RSelect>
              ),
              quantity: (
                <RInput
                  value={value.quantity}
                  name="quantity"
                  onChange={(event) => handleChangeInput(value.id, event)}
                  type="number"
                />
              ),
              action: (
                <Tooltip placement="top" title="Remove order">
                  <DeleteOutlineIcon
                    onClick={() => removeOrderHandler(value.id)}
                    sx={{ cursor: "pointer" }}
                    color="error"
                    fontSize="medium"
                  />
                </Tooltip>
              ),
            })),
          }}
        />
        <div style={{ display: "flex", width: "40%", justifySelf: "center", gap: 6 }}>
          <MDButton onClick={handleClose} color="info" variant="outlined" sx={{ flex: 1 }}>
            Close
          </MDButton>
          <MDButton onClick={submitHandler} color="info" variant="contained" sx={{ flex: 2 }}>
            Proceed
          </MDButton>
        </div>
      </Box>
    </Dialog>
  );
}

export default OutboundDialog;
