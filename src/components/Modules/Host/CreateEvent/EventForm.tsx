"use client";

import InputFieldsError from "@/components/Shared/InputFieldsError";
import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { createEvent } from "@/services/event/event.service";
import { useActionState, useEffect } from "react";
import { toast } from "sonner";

const CreateEventForm = () => {
  const [state, formAction, isPending] = useActionState(createEvent, null);

  useEffect(() => {
    if (state && !state.success && state.message) {
      toast.error(state.message);
    }
  }, [state]);

  return (
    <form action={formAction}>
      <FieldGroup>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* event name */}
          <Field>
            <FieldLabel htmlFor="eventName">Event Name</FieldLabel>
            <Input
              id="eventName"
              name="eventName"
              type="text"
              placeholder="Write your event name here"
            />

            <InputFieldsError field="eventName" state={state} />
          </Field>

          {/* date */}
          <Field>
            <FieldLabel htmlFor="date">Date</FieldLabel>
            <Input
              id="date"
              name="date"
              type="datetime-local"
              defaultValue={state?.formData?.date || ""}
            />
            <InputFieldsError field="date" state={state} />
          </Field>

          {/* location */}
          <Field>
            <FieldLabel htmlFor="location">Location</FieldLabel>
            <Input
              id="location"
              name="location"
              type="location"
              placeholder="Dhaka, Bangladesh"
            />
            <InputFieldsError field="location" state={state} />
          </Field>

          {/* Max Participants */}
          <Field>
            <FieldLabel htmlFor="maxParticipants">Max Participants</FieldLabel>
            <Input
              id="maxParticipants"
              name="maxParticipants"
              type="text"
              placeholder="100"
            />

            <InputFieldsError field="maxParticipants" state={state} />
          </Field>

          {/* Min Participants */}
          <Field>
            <FieldLabel htmlFor="minParticipants">Min Participants</FieldLabel>
            <Input
              id="minParticipants"
              name="minParticipants"
              type="text"
              placeholder="1"
            />
            <InputFieldsError field="minParticipants" state={state} />
          </Field>

          {/* Joining Fee */}
          <Field>
            <FieldLabel htmlFor="joiningFee">Joining Fee</FieldLabel>
            <Input
              id="joiningFee"
              name="joiningFee"
              type="text"
              placeholder="500"
            />
            <InputFieldsError field="joiningFee" state={state} />
          </Field>

          {/* category */}
          <Field>
            <FieldLabel htmlFor="category">Category</FieldLabel>
            <Select name="category">
              <SelectTrigger>
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Category</SelectLabel>
                  <SelectItem value="Concert">Concert</SelectItem>
                  <SelectItem value="Live_Music">Live Music</SelectItem>
                  <SelectItem value="Movie_Night">Movie Night</SelectItem>
                  <SelectItem value="Stand_up_Comedy">
                    Stand up Comedy
                  </SelectItem>
                  <SelectItem value="Theater">Theater</SelectItem>
                  <SelectItem value="Hackathon">Hackathon</SelectItem>
                  <SelectItem value="Dev_Meetup">Dev Meetup</SelectItem>
                  <SelectItem value="Tech_Talk">Tech Talk</SelectItem>
                  <SelectItem value="Coding_Workshop">
                    Coding Workshop
                  </SelectItem>
                  <SelectItem value="Networking_Event">
                    Networking_Event
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
            <InputFieldsError field="category" state={state} />
          </Field>

          {/* description */}
          <Field>
            <FieldLabel htmlFor="description">Description</FieldLabel>
            <Textarea
              id="description"
              name="description"
              placeholder="Type your description here."
            />
            <InputFieldsError field="description" state={state} />
          </Field>

          {/* file */}
          <Field>
            <FieldLabel htmlFor="file">Upload You Photo</FieldLabel>

            <Input
              // ref={fileInputRef}
              // onChange={handleFileChange}
              id="file"
              name="file"
              type="file"
              accept="image/*"
            />
            <InputFieldsError field="icon" state={state} />
          </Field>
        </div>

        <FieldGroup className="mt-4">
          <Field>
            <Button type="submit" disabled={isPending}>
              Submit
            </Button>
          </Field>
        </FieldGroup>
      </FieldGroup>
    </form>
  );
};

export default CreateEventForm;
