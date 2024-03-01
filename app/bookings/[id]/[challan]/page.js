"use client";

import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const date = searchParams.get("date");
  const time = searchParams.get("time");
  const amount = searchParams.get("amount");
  console.log(date, time, amount);

  return (
    <div className="w-12 h-auto">
      <InfoItem label="Challan No:" value={`soon`} />
      <InfoItem label="Plot Size:" value={`soon`} />
      <InfoItem label="Name" value={`soon`} />
    </div>
  );
}

const InfoItem = ({ label, value }) => (
  <div>
    <p className="text-md text-gray-600">{label}</p>
    <p className="text-sm font-semibold">{value}</p>
  </div>
);
