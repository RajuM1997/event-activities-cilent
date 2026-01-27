"use client";

import ClearFiltersButton from "@/components/Shared/ClearFiltersButton";
import DateSelectFilter from "@/components/Shared/DateSelectFilter";
import SearchFilter from "@/components/Shared/SearchFilter";
import SelectFilter from "@/components/Shared/SelectFilter";
import { Label } from "@/components/ui/label";

const EventSearchOption = () => {
  return (
    <div
      className="space-y-5 w-fit mx-auto md:h-50 lg:h-40 bg-primary/10 flex justify-center items-center px-5 lg:px-20 rounded-lg h-80 py-5 "
      style={{ boxShadow: "0 4px 4px rgba(0,0,0,.25)" }}
    >
      {/* Row 1: Refresh Button */}

      {/* Row 2: Filter Controls */}
      <div className="flex items-center gap-3 flex-wrap">
        <div>
          <Label className="pb-2">Location</Label>
          <SearchFilter
            paramName="location"
            placeholder="type event location"
          />
        </div>

        {/* Category Filter */}
        <div>
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
        <DateSelectFilter paramName="category" />

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
