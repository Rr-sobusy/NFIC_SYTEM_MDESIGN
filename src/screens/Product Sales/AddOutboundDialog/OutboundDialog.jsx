import React from "react";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import DataTable from "examples/Tables/DataTable";
import RSelect from "custom components/RSelect";
import RInput from "custom components/RInput";
import useFgStore from "screens/FgSection/contexts/fgStore";
import useOutboundDialog from "../context/outboundDialog";

const datas = [
  {
    name: "rex",
    lastName: "hernandez",
  },
];

function OutboundDialog() {
  const { isOpen, handleClose } = useOutboundDialog();
  const { fgDatas } = useFgStore();

  const submitHandler = () => {};

  return (
    <Dialog sx={{ marginRight: -2 }} fullScreen open={isOpen} onClose={handleClose}>
      <AppBar sx={{ position: "relative" }}>
        <Toolbar sx={{ backgroundColor: "#2880EB", boxShadow: "0 4px 2px -2px gray" }}>
          <MDTypography color="white" sx={{ flex: 1, marginLeft: 2 }} variant="h5">
            Outbound Product/s
          </MDTypography>
        </Toolbar>
      </AppBar>
      <Box sx={{ display: "grid", margin: "5px 120px 5px 120px" }}>
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
                accessor: "rexxxx",
                width: "25%",
              },
              {
                Header: "Action",
                accessor: "action",
                width: "10%",
              },
            ],
            rows: datas.map(() => ({
              product_name: (
                <RSelect>
                  {fgDatas.map((values) => (
                    <option key={values.product_id} value={values.product_name}>
                      {values.product_name}
                    </option>
                  ))}
                </RSelect>
              ),
              rexxxx: <RInput type="number" />,
            })),
          }}
        />
        <div style={{ display: "flex", width: "100%", flexDirection: "row-reverse" }}>
          <h2>rex</h2>
        </div>
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
