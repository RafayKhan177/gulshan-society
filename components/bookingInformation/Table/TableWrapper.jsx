import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@nextui-org/react";
import { deleteDocument } from "@/api/functions/post";

export default function TableWrapper({ items }) {
  const deleteRow = (id) => {
    deleteDocument("bookings", id);
  };

  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>Date</TableColumn>
        <TableColumn>Time</TableColumn>
        <TableColumn>Amount</TableColumn>
      </TableHeader>
      <TableBody emptyContent={"No rows to display."}>
        {items &&
          items.map((item) => (
            <TableRow key={item?.time}>
              <TableCell>{item?.date}</TableCell>
              <TableCell>{item?.time}</TableCell>
              <TableCell>Rs {item?.entry}</TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
}
