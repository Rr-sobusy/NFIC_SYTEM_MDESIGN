import React, { useEffect } from "react";
import DataTable from "examples/Tables/DataTable";
import RGrid from "custom components/RGrid";
import axios from "axios";
import MDButton from "components/MDButton";
import useFgStore from "../contexts/fgStore";

function FgTable() {
  // Shared states
  const { fgDatas, setFgDatas } = useFgStore();

  // Fetch datas
  useEffect(() => {
    async function fetchDatas() {
      const data = await axios({
        method: "GET",
        url: "http://192.168.1.100:3003/api/getproducts",
      });
      setFgDatas(data.data);
    }
    fetchDatas();
  }, []);
  return (
    <RGrid marginTop={12}>
      <DataTable
        canSearch
        entriesPerPage={{ defaultValue: 100 }}
        table={{
          columns: [
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
    </RGrid>
  );
}

export default FgTable;
