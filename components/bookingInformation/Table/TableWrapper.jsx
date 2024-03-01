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
  const { entries, installmentAmount } = item;

  // Calculate outstanding balance based on received amounts
  const calculateOutstandingBalance = (receivedAmount, installmentIndex) => {
    let totalPaidAmount = 0;
    for (let i = 0; i < installmentIndex; i++) {
      totalPaidAmount += parseFloat(entries[i].amount);
    }
    return (
      installmentAmount * (installmentIndex + 1) -
      totalPaidAmount
    ).toFixed(2);
  };

  // Calculate the due amount for each installment based on the current month received amount and total payment
  const calculateDueAmount = (installmentIndex) => {
    let totalReceivedAmount = 0;
    // Calculate the total received amount up to the current installment
    for (let i = 0; i < installmentIndex; i++) {
      totalReceivedAmount += parseFloat(entries[i].amount);
    }
    const totalPrice = parseFloat(item.totalPrice);
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
        <TableColumn>Received Date</TableColumn>
        <TableColumn>Received Amount</TableColumn>
        <TableColumn>Outstanding Balance</TableColumn>
        <TableColumn>Remarks</TableColumn>
        <TableColumn>Action</TableColumn>
      </TableHeader>
      <TableBody emptyContent={"No rows to display."}>
        {entries.map((installment, index) => (
          <TableRow key={index}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{`Installment ${index + 1}`}</TableCell>
            <TableCell>{installment.date}</TableCell>
            <TableCell>{item?.totalPrice}</TableCell>
            <TableCell>{installment.time}</TableCell>
            <TableCell>{installment.amount}</TableCell>
            <TableCell>{calculateDueAmount(index + 1)}</TableCell>
            <TableCell>{installment.remarks}</TableCell>
            <TableCell>
              <Tooltip content="View" color="success">
                {/* Pass index, receivedDate, and receivedAmount to the updateInstallment function */}
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
        ))}
      </TableBody>
    </Table>
  );
}
