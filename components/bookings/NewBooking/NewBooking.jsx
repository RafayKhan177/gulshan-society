"use client";

import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Autocomplete,
  AutocompleteItem,
} from "@nextui-org/react";

const customers = [
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
];

const plots = [
  { id: 1, creationDate: "2024-02-28", size: "1000 sqft" },
  { id: 2, creationDate: "2024-02-27", size: "800 sqft" },
  { id: 3, creationDate: "2024-02-26", size: "1200 sqft" },
];

export default function NewCustomers() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [formData, setFormData] = useState({
    selectedPlot: null,
    selectedCustomer: null,
    totalPrice: "",
  });

  const handleChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log(formData);
    // Reset form fields
    setFormData({
      selectedPlot: null,
      selectedCustomer: null,
      totalPrice: "",
    });
    onClose(); // Close the modal after submission
  };

  return (
    <>
      <Button variant="shadow" color="success" onClick={onOpen}>
        New Booking
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader>New Booking</ModalHeader>
          <ModalBody>
            <Autocomplete label="Select a Plot" value={formData.selectedPlot}>
              {plots.map((plot) => (
                <AutocompleteItem
                  onClick={() => handleChange("selectedPlot", plot)}
                  key={plot.id}
                  value={plot}
                >
                  {plot.size}
                </AutocompleteItem>
              ))}
            </Autocomplete>
            <Autocomplete
              label="Select a Customer"
              value={formData.selectedCustomer}
            >
              {customers.map((customer) => (
                <AutocompleteItem
                  onClick={() => handleChange("selectedCustomer", customer)}
                  key={customer.id}
                  value={customer}
                >
                  {customer.Name}
                </AutocompleteItem>
              ))}
            </Autocomplete>
            <Input
              label="Total Price"
              name="totalPrice"
              value={formData.totalPrice}
              onChange={(e) => handleChange("totalPrice", e.target.value)}
            />
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onClick={onClose}>
              Close
            </Button>
            <Button color="primary" onClick={handleSubmit}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
