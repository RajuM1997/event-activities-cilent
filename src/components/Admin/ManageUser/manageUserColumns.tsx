import { Column } from "@/components/Shared/ManagementTable";
import { IUser } from "@/types/user.interface";

export const manageUserColumns: Column<IUser>[] = [
  {
    header: "Name",
    accessor: (user) => (
      <div className="flex items-center gap-2">
        <div>
          <p className="font-medium">{user.name || "N/A"}</p>
          {/* <p className="text-xs text-muted-foreground">
            {event.patient?.email || ""}
          </p> */}
        </div>
      </div>
    ),
  },
  {
    header: "Email",
    accessor: (user) => (
      <span className="text-sm p-2 font-semibold text-base-600">
        {user.email}
      </span>
    ),
    sortKey: "minParticipants",
  },
  {
    header: "City",
    accessor: (user) => (
      <span className="text-sm p-2 font-semibold text-base-600">
        {user?.userProfile?.location?.city}
      </span>
    ),
  },
  {
    header: "Area",
    accessor: (user) => (
      <span className="text-sm p-2 font-semibold text-base-600">
        {user?.userProfile?.location?.area}
      </span>
    ),
  },
  {
    header: "Country",
    accessor: (user) => (
      <span className="text-sm p-2 font-semibold text-base-600">
        {user?.userProfile?.location?.country}
      </span>
    ),
  },
  {
    header: "Status",
    accessor: (user) => (
      <span className="text-sm p-2 font-semibold text-base-600">
        {user.status}
      </span>
    ),
    sortKey: "location",
  },
];
