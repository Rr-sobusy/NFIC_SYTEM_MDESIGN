import React, { useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import DataTable from "examples/Tables/DataTable";
import RGrid from "custom components/RGrid";
import axios from "axios";
import MDButton from "components/MDButton";
import apiUrl from "API";
import useFgStore from "../contexts/fgStore";

function FgTable() {
  // Shared states
  const { fgDatas, setFgDatas, refetch } = useFgStore();

  // Fetch datas
  useEffect(() => {
    async function fetchDatas() {
      const data = await axios({
        method: "GET",
        url: `${apiUrl}/getproducts`,
      });
      setFgDatas(data.data);
      console.log("refetched");
    }
    fetchDatas();
  }, [refetch]);
  return (
    <RGrid marginTop={12}>
      {fgDatas.length !== 0 ? (
        <DataTable
          canSearch
          entriesPerPage={{ defaultValue: 100 }}
          table={{
            columns: [
              { Header: "Product ID", accessor: "product_id", width: "10" },
              { Header: "Product Name", accessor: "product_name", width: "25%" },
              { Header: "Packaging Size", accessor: "packaging_size", width: "10%" },
              { Header: "Initial Stocks", accessor: "initial_stocks", width: "12%" },
              { Header: "In", accessor: "in", width: "12%" },
              { Header: "out", accessor: "out", width: "12%" },
              { Header: "Current Stocks", accessor: "current_stocks", width: "12%" },
              { Header: "Stocks in kls", accessor: "in_kls", width: "12%" },
              { Header: "Action", accessor: "action", width: "12%" },
            ],
            rows: fgDatas.map((items) => ({
              product_id: items.product_id,
              product_name: items.product_name,
              packaging_size: items.packaging_size,
              initial_stocks: items.initial_stocks,
              in: items.in,
              out: items.out,
              current_stocks: items.current_stocks,
              action: (
                <MDButton color="info" variant="text">
                  Edit
                </MDButton>
              ),
              in_kls: Number(items.current_stocks) * Number(items.packaging_size),
            })),
          }}
        />
      ) : (
        <Box sx={{ display: "grid", width: "100%", justifyContent: "center" }}>
          <CircularProgress color="info" />
        </Box>
      )}
    </RGrid>
  );
}

export default FgTable;
