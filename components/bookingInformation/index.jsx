import { Divider, Image } from "@nextui-org/react";
import React from "react";
import TableWrapper from "./Table/TableWrapper";

export default function BookingInformation({ item }) {
  // Calculate total entries amount
  const totalEntriesAmount = item?.entries.reduce(
    (total, entry) => total + parseFloat(entry.entry),
    0
  );

  // Calculate remaining amount
  const remainingAmount = parseFloat(item?.totalPrice) - totalEntriesAmount;

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mx-8">
        <div className="w-1/4">
          <Image src="/logo.jpg" alt="logo" height={250} width={200} />
        </div>
        <div className="w-1/2 grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <InfoItem label="Plot Size" value={item?.selectedPlot?.size} />
            <InfoItem label="Customer" value={item?.selectedCustomer?.name} />
            <InfoItem label="CNIC" value={item?.selectedCustomer?.cnic} />
          </div>
          <div className="space-y-4">
            <InfoItem label="Price" value={item?.totalPrice} />
            <InfoItem label="Address" value={item?.selectedCustomer?.address} />
          </div>
        </div>
      </div>
      <Divider className="my-6" />
      <TableWrapper items={item?.entries} />
      <Divider className="my-6" />
      <div className="flex justify-between items-center mx-8">
        <InfoItem label="Date & Time" value={item?.date + " " + item?.time} />
        <InfoItem label="Total Price" value={`${item?.totalPrice} Rs`} />
        <InfoItem
          label="Remaining Amount"
          value={`${remainingAmount.toFixed(2)} Rs`}
        />{" "}
        {/* Display remaining amount */}
      </div>

      <div></div>
    </div>
  );
}

const InfoItem = ({ label, value }) => (
  <div>
    <p className="text-gray-600">{label}</p>
    <p className="text-lg font-semibold">{value}</p>
  </div>
);
