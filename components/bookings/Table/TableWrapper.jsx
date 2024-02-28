import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Tooltip,
} from "@nextui-org/react";
import { InfoIcon } from "@/components/icons/accounts/info-icon";
import { TrashIcon } from "@/components/icons/accounts/trash-icon";

export default function TableWrapper({ items }) {
  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        {/* <TableColumn>plotId</TableColumn> */}
        {/* <TableColumn>customerId</TableColumn> */}
        <TableColumn>Date</TableColumn>
        <TableColumn>Time</TableColumn>
        <TableColumn>Name</TableColumn>
        <TableColumn>CNIC</TableColumn>
        <TableColumn>Phone</TableColumn>
        <TableColumn>Plot Size</TableColumn>
        <TableColumn>Actions</TableColumn>
      </TableHeader>
      <TableBody emptyContent={"No rows to display."}>
        {items &&
          items.map((item) => (
            <TableRow>
              {/* <TableCell>{item?.plotId}</TableCell> */}
              {/* <TableCell>{item?.customerId}</TableCell> */}
              <TableCell>{item?.date}</TableCell>
              <TableCell>{item?.time}</TableCell>
              <TableCell>{item?.Name}</TableCell>
              <TableCell>{item?.CNIC}</TableCell>
              <TableCell>{item?.Phone}</TableCell>
              <TableCell>{item?.plotSize}</TableCell>
              <TableCell>
                <Tooltip content="View Image" color="secondary">
                  <button
                    onClick={() => console.log("View Image", user.screenshot)}
                  >
                    <InfoIcon size={20} fill="#5a258f" />
                  </button>
                </Tooltip>
                <Tooltip content="Delete" color="danger">
                  <button
                    onClick={() => console.log("View Image", user.screenshot)}
                  >
                    <TrashIcon size={20} fill="#e12e32" />
                  </button>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}
