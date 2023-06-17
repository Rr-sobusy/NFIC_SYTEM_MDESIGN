import React from "react";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import RButton from "custom components/RButton";

function FgSection() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <RButton label="rex" />
    </DashboardLayout>
  );
}

export default FgSection;
