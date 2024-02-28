"use client";

import React from "react";
import { App } from "@/components/bookings";
import { Layout } from "@/components/layout/layout";

export default function Page() {
  // Generate dynamic date and time functions
  const getCurrentDate = () => {
    const date = new Date();
    const dd = String(date.getDate()).padStart(2, "0");
    const mm = String(date.getMonth() + 1).padStart(2, "0");
    const yyyy = date.getFullYear();
    return `${dd}/${mm}/${yyyy}`;
  };

  const getCurrentTime = () => {
    const date = new Date();
    const hh = String(date.getHours() % 12 || 12).padStart(2, "0");
    const mm = String(date.getMinutes()).padStart(2, "0");
    const period = date.getHours() < 12 ? "AM" : "PM";
    return `${hh}:${mm} ${period}`;
  };

  // Mock data with updated fields
  const data = [
    {
      plotId: 1,
      customerId: "JD123",
      date: getCurrentDate(),
      time: getCurrentTime(),
      plotSize: 1,
      Name: "John Doe",
      CNIC: "12345-6789012-3",
      Phone: "123-456-7890",
      Address: "123 Street, City",
    },
    {
      plotId: 2,
      customerId: "JS456",
      date: getCurrentDate(),
      time: getCurrentTime(),
      Name: "Jane Smith",
      CNIC: "98765-4321098-7",
      Phone: "321-654-0987",
      Address: "456 Avenue, Town",
    },
    {
      plotId: 3,
      customerId: "AJ789",
      date: getCurrentDate(),
      time: getCurrentTime(),
      Name: "Alice Johnson",
      CNIC: "24680-1357924-6",
      Phone: "456-789-0123",
      Address: "789 Road, Village",
    },
    // Add more mock data as needed
  ];

  return (
    <Layout>
      <App items={data} />
    </Layout>
  );
}
