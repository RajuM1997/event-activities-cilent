"use client";

import ClearFiltersButton from "@/components/Shared/ClearFiltersButton";
import DateSelectFilter from "@/components/Shared/DateSelectFilter";
import SearchFilter from "@/components/Shared/SearchFilter";
import SelectFilter from "@/components/Shared/SelectFilter";
import { Label } from "@/components/ui/label";

const EventSearchOption = () => {
  return (
    <div
      className="space-y-5 w-fit mx-auto lg:h-80 flex justify-center items-center px-5 rounded-lg h-full py-5 backdrop-blur-md border border-white/20"
      style={{
        background:
          "linear-gradient(135deg, rgba(255,255,255,0.25), rgba(34,197,94,0.05))",
        boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
      }}
    >
      {/* Row 2: Filter Controls */}
      <div className="flex items-center gap-3 flex-wrap">
        <div className="w-full">
          <Label className="pb-2">Location</Label>
          <SearchFilter
            paramName="location"
            placeholder="type event location"
          />
        </div>

        {/* Category Filter */}
        <div className="w-full">
          <Label className="pb-2">Category</Label>
          <SelectFilter
            paramName="category"
            placeholder="Event Category"
            defaultValue="All Event"
            options={[
              { label: "Concert", value: "Concert" },
              { label: "Live Music", value: "Live_Music" },
              { label: "Movie Night", value: "Movie_Night" },
              { label: "Stand Up Comedy", value: "Stand_up_Comedy" },
              { label: "Theater", value: "Theater" },
            ]}
          />
        </div>

        {/* Date filter */}
        <div className="w-full">
          <DateSelectFilter paramName="date" />
        </div>

        {/* Clear All Filters */}
        <div>
          <Label style={{ visibility: "hidden" }} className="pb-2">
            d
          </Label>
          <ClearFiltersButton />
        </div>
      </div>
    </div>
  );
};

export default EventSearchOption;
