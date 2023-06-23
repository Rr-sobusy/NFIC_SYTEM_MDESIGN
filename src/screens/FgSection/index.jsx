import React from "react";
import AccessibilityIcon from "@mui/icons-material/Accessibility";
import Inventory2Icon from "@mui/icons-material/Inventory2";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import StarIcon from "@mui/icons-material/Star";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import RGrid from "custom components/RGrid";
import RColumn from "custom components/RColumn";
import Card from "./StatsCards/Card";
import FgTable from "./Fgtable";
import Floatingbtn from "../../custom components/Floatingbtn";
import useFgStore from "./contexts/fgStore";
import AddFgDialog from "./AddFgDialog/AddFgDialog";
import dialogStore from "./contexts/dialogStore";

function FgSection() {
  const { fgDatas } = useFgStore();
  const { handleClickOpen } = dialogStore();

  // Filter Products w/ stocks
  const withStocks = fgDatas.filter((items) => items.current_stocks !== "0");

  console.log("rendered");

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <RGrid marginTop={20}>
        <h4>Overview</h4>
      </RGrid>
      <RGrid marginTop={12}>
        <RColumn>
          <Card
            child={<Inventory2Icon fontSize="large" />}
            value={fgDatas ? fgDatas.length : 0}
            label="Total Products"
            bgColor="#31859D"
          />
        </RColumn>
        <RColumn>
          <Card
            child={<ShowChartIcon fontSize="large" />}
            value={withStocks ? withStocks.length : 0}
            label="Products w/ stock"
            bgColor="#FE7549"
          />
        </RColumn>
        <RColumn>
          <Card
            child={<AccessibilityIcon fontSize="large" />}
            value="203532%"
            label="RexRandy"
            bgColor="#2A76AA"
          />
        </RColumn>
        <RColumn>
          <Card
            child={<StarIcon fontSize="large" />}
            value="1"
            label="Best moving products"
            bgColor="#7757FA"
          />
        </RColumn>
      </RGrid>
      <RGrid marginTop={40}>
        <h4>Stocks Report</h4>
      </RGrid>
      <FgTable />
      <Floatingbtn clickHandler={handleClickOpen} />
      <AddFgDialog />
    </DashboardLayout>
  );
}

export default FgSection;
