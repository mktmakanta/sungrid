"use client";

import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./components/ui/dialog";
import { Button } from "./components/ui/button";
import SuccessIcon from "./SuccessIcon";

const ContactModal = ({ isOpen, onClose, title, message, type }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle
            className={type === "success" ? "text-green-600" : "text-red-600"}
          >
            {title}
          </DialogTitle>
          <DialogDescription className="text-gray-700">
            <SuccessIcon />

            {message}
          </DialogDescription>
        </DialogHeader>
        <div className="flex justify-end mt-4">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
