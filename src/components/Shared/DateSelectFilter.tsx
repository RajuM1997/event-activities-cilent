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
        <Label>Date</Label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="w-36 justify-between font-normal"
              disabled={isPending}
            >
              {selectedDate ? selectedDate.toLocaleDateString() : "Select date"}
              <ChevronDownIcon className="h-4 w-4 opacity-60" />
            </Button>
          </PopoverTrigger>

          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={selectedDate}
              captionLayout="dropdown"
              onSelect={(date) => {
                if (!date) return;
                updateParams(dateParam, date.toISOString().split("T")[0]);
                setOpen(false);
              }}
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Time Picker */}
      <div className="flex flex-col gap-2">
        <Label>Time</Label>
        <Input
          type="time"
          value={timeValue ?? ""}
          disabled={isPending}
          onChange={(e) => updateParams(timeParam, e.target.value)}
          className="bg-background appearance-none
            [&::-webkit-calendar-picker-indicator]:hidden"
        />
      </div>
    </div>
  );
};

export default DateTimeFilter;
