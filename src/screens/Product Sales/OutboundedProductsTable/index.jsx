import React from "react";
import DataTable from "examples/Tables/DataTable";
import axios from "axios";
import MDButton from "components/MDButton";
import useSalesStore from "../context/salesStore";

function OutboundedTable() {
  const { outboundDatas, fetchOutboundData } = useSalesStore();
  React.useEffect(() => {
    async function fetchOutboundDatas() {
      const result = await axios({
        method: "GET",
        url: "http://192.168.1.100:3003/api/getsales",
      });
      fetchOutboundData(result.data);
    }
    fetchOutboundDatas();
  }, []);

  return (
    <DataTable
      table={{
        columns: [
          { Header: "Date outbounded", accessor: "createdAt", width: "15%" },
          { Header: "Customer Name", accessor: "customer_name", width: "20" },
          { Header: "Product Name", accessor: "product_name", width: "28%" },
          { Header: "Quantity (bgs)", accessor: "quantity", width: "12%" },
          { Header: "Quantity (kls)", accessor: "inkls", width: "12%" },
          { Header: "Action", accessor: "action", width: "10%" },
        ],
        rows: outboundDatas.map((item) => ({
          customer_name: item.customer_name,
          createdAt: new Date(item.createdAt).toLocaleString(),
          product_name: item.sales_items.map((i) => <p>{i.productName}</p>),
          quantity: item.sales_items.map((i) => <p>{`${i.quantity} bags`}</p>),
          inkls: item.sales_items.map((i) => (
            <p>{`${Number(i.quantity) * Number(i.packagingSize)} kls.`}</p>
          )),
          action: (
            <MDButton variant="text" color="info">
              Edit
            </MDButton>
          ),
        })),
      }}
    />
  );
}

export default OutboundedTable;