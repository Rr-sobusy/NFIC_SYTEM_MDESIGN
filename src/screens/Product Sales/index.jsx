import React from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import Floatingbtn from "custom components/Floatingbtn";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import OutboundedTable from "./OutboundedProductsTable";
import OutboundDialog from "./AddOutboundDialog/OutboundDialog";
import useOutboundDialog from "./context/outboundDialog";

function ProductSales() {
  const { handleClickOpen } = useOutboundDialog();

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <OutboundedTable />
      <Floatingbtn clickHandler={handleClickOpen} />
      <OutboundDialog />
    </DashboardLayout>
  );
}

export default ProductSales;
