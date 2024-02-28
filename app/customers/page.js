"use client";

import { App } from "@/components/customers";
import { Layout } from "@/components/layout/layout";

export default function Page() {
  // Mock data
  const data = [
    {
      id: 1,
      Name: "John Doe",
      CNIC: "12345-6789012-3",
      Phone: "123-456-7890",
      Address: "123 Street, City",
    },
    {
      id: 2,
      Name: "Jane Smith",
      CNIC: "98765-4321098-7",
      Phone: "321-654-0987",
      Address: "456 Avenue, Town",
    },
    {
      id: 3,
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
