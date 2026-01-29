"use client";

import * as React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";
import { Input } from "@/components/ui/input";
import { Field, FieldLabel } from "../ui/field";

interface DateTimeFilterProps {
  paramName?: string;
}

const getNowLocal = () => {
  const now = new Date();
  const pad = (n: number) => String(n).padStart(2, "0");

  return `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(
    now.getDate(),
  )}T${pad(now.getHours())}:${pad(now.getMinutes())}`;
};

const DateTimeFilter = ({ paramName = "date" }: DateTimeFilterProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  const urlValue = searchParams.get(paramName);
  const [value, setValue] = React.useState<string>(urlValue ?? getNowLocal());

  React.useEffect(() => {
    if (urlValue) {
      setValue(urlValue);
    }
  }, [urlValue]);

  const updateParams = (value?: string) => {
    const params = new URLSearchParams(searchParams.toString());

    if (!value) {
      params.delete(paramName);
    } else {
      params.set(paramName, value);
    }

    startTransition(() => {
      router.push(`?${params.toString()}`);
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    setValue(newValue);
    updateParams(newValue);
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <Field>
        <FieldLabel htmlFor="datetime">Date & Time</FieldLabel>
        <Input
          id="datetime"
          type="datetime-local"
          value={value}
          onChange={handleChange}
          disabled={isPending}
        />
      </Field>
    </div>
  );
};

export default DateTimeFilter;
