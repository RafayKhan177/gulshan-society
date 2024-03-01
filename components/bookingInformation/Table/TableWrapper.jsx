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
import Link from "next/link";
import { InfoIcon } from "@/components/icons/accounts/info-icon";

export default function TableWrapper({ item }) {
  const { entries, installmentAmount, installmentQuarters } = item;

  // Calculate the total price and number of installments
  const totalPrice = item.totalPrice;
  const totalInstallments = installmentQuarters;

  // Calculate the due amount for each installment based on the current month received amount and total payment
  const calculateDueAmount = (installmentIndex) => {
    let totalReceivedAmount = 0;
    // Calculate the total received amount up to the current installment
    for (let i = 0; i < installmentIndex; i++) {
      totalReceivedAmount = entries[i]?.amount || 0;
    }
    const dueAmount = totalPrice - totalReceivedAmount;
    return dueAmount.toFixed(2);
  };

  return (
    <Table aria-label="Installment Tracking Table">
      <TableHeader>
        <TableColumn>Sr No.</TableColumn>
        <TableColumn>Description</TableColumn>
        <TableColumn>Due Date</TableColumn>
        <TableColumn>Due Amount</TableColumn>
        <TableColumn>Received Date & Time</TableColumn>
        <TableColumn>Received Amount</TableColumn>
        <TableColumn>Outstanding Balance</TableColumn>
        <TableColumn>Remarks</TableColumn>
        <TableColumn>Action</TableColumn>
      </TableHeader>
      <TableBody emptyContent={"No rows to display."}>
        {Array.from({ length: totalInstallments }, (_, index) => {
          const installmentIndex = index + 1;
          const installment = entries[index] || {}; // Get installment if exists
          const dueAmount = calculateDueAmount(installmentIndex);
          return (
            <TableRow key={index}>
              <TableCell>{installmentIndex}</TableCell>
              <TableCell>{`Installment ${installmentIndex}`}</TableCell>
              <TableCell>{installment.date || "-"}</TableCell>
              <TableCell>{item?.totalPrice}</TableCell>
              <TableCell>
                {installment.date || "-"} {installment.time || "-"}
              </TableCell>
              <TableCell>{installment.amount || "-"}</TableCell>
              <TableCell>{dueAmount || 0}</TableCell>

              <TableCell>{installment.remarks || "-"}</TableCell>
              <TableCell>
                <Tooltip content="View" color="success">
                  <InfoIcon
                    size={20}
                    fill="#5a258f"
                    onClick={() =>
                      console.log(index, installment.time, installment.amount)
                    }
                  />
                </Tooltip>
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
