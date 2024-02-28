"use client";

import React, { useEffect, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Tooltip,
} from "@nextui-org/react";
import { updateDoc } from "@/api/functions/post";
import getCurrentDateTime from "@/api/getCurrentDateTime";
import { BalanceIcon } from "@/components/icons/sidebar/balance-icon";

export default function NewEntry({ item }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const fetchData = async () => {
      try {
      } catch (error) {
        console.error("Error fetching collections:", error);
      }
    };

    fetchData();
  }, []);

  const [amount, setAmount] = useState(100);

  const handleSubmit = async () => {
    const dateTime = getCurrentDateTime();

    const updatedEntries = item.entries
      ? [
          ...item.entries,
          { entry: amount, date: dateTime?.date, time: dateTime?.time },
        ]
      : [{ entry: amount, date: dateTime?.date, time: dateTime?.time }];

    // Handle form submission here
    await updateDoc("bookings", item.id, {
      ...item,
      entries: updatedEntries,
    });

    // Reset form fields
    onClose(); // Close the modal after submission

    window.location.reload();
  };

  return (
    <>
      <Tooltip content="New Entry" color="danger">
        <button onClick={onOpen}>
          <BalanceIcon size={20} fill="#e12e32" />
        </button>
      </Tooltip>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader>New Entry</ModalHeader>
          <ModalBody>
            <Input
              label="Amount"
              name="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
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
