"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";

const BecomeHostDialog = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button size="lg">Host Request</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Host Request Form</DialogTitle>
          </DialogHeader>
          {/* Your form goes here */}
          <p className="text-muted-foreground mt-2">
            Form will go here. (Not implemented yet)
          </p>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BecomeHostDialog;
