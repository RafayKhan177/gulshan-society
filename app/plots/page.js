"use client";

import { Layout } from "@/components/layout/layout";
import { App } from "@/components/plots";

export default function Page() {
  // Mock data
  const data = [
    { id: 1, creationDate: "2024-02-28", size: "1000 sqft" },
    { id: 2, creationDate: "2024-02-27", size: "800 sqft" },
    { id: 3, creationDate: "2024-02-26", size: "1200 sqft" },
    // Add more mock data as needed
  ];

  return (
    <Layout>
      <App items={data} />
    </Layout>
  );
}
