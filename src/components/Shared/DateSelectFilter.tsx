"use client";

import * as React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import { ChevronDownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Field, FieldLabel } from "../ui/field";

interface DateTimeFilterProps {
  dateParam?: string; // ?date=
  timeParam?: string; // ?time=
  paramName?: string;
}

const DateTimeFilter = ({
  dateParam = "date",
  timeParam = "time",
}: DateTimeFilterProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const [open, setOpen] = React.useState(false);

  // get values from URL
  const dateValue = searchParams.get(dateParam);
  const timeValue = searchParams.get(timeParam);

  const selectedDate = dateValue ? new Date(dateValue) : undefined;

  const updateParams = (key: string, value?: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (!value) {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    startTransition(() => {
      router.push(`?${params.toString()}`);
    });
  };

  return (
    <div className="flex gap-4">
      {/* Date Picker */}
      <div className="flex flex-col gap-2">
        <Field>
          <FieldLabel htmlFor="date">Date</FieldLabel>
          <Input id="date" name="date" type="datetime-local" />
        </Field>
      </div>
    </div>
  );
};

export default DateTimeFilter;
