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
import { TrashIcon } from "@/components/icons/accounts/trash-icon";

export default function TableWrapper({ items }) {
  return (
    <Table aria-label="Example static collection table">
      <TableHeader>
        <TableColumn>Creation Date</TableColumn>
        <TableColumn>Plot Size</TableColumn>
        <TableColumn>Action</TableColumn>
      </TableHeader>
      <TableBody emptyContent={"No rows to display."}>
        {items &&
          items.map((item) => (
            <TableRow>
              <TableCell>{item?.creationDate}</TableCell>
              <TableCell>{item?.plot}</TableCell>
              <TableCell>
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
