import { Divider, Image } from "@nextui-org/react";
import React from "react";
import TableWrapper from "./Table/TableWrapper";

export default function BookingInformation({ item }) {
  console.log(item);
  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mx-8">
        <div className="w-1/4">
          <Image src="/logo.jpg" alt="logo" height={200} width={150} />
        </div>
        <div className="w-1/2 grid grid-cols-2 gap-4">
          <div className="space-y-4">
            <InfoItem
              label="Plot Size"
              value={`${item?.selectedPlot?.size} Marla`}
            />
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
      <TableWrapper item={item} />
      <Divider className="my-6" />
      <div className="flex justify-between items-center mx-8">
        <InfoItem label="Booked At" value={item?.date + " " + item?.time} />
        <InfoItem label="Total Price" value={`${item?.totalPrice} Rs`} />
      
        {/* Display remaining amount */}
      </div>

      <div></div>
    </div>
  );
}

const InfoItem = ({ label, value }) => (
  <div>
    <p className="text-md text-gray-600">{label}</p>
    <p className="text-sm font-semibold">{value}</p>
  </div>
);
