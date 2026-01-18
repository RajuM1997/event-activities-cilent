import { Column } from "@/components/Shared/ManagementTable";
import { IUser } from "@/types/user.interface";

export const manageHostColumns: Column<IUser>[] = [
  {
    header: "Name",
    accessor: (user) => (
      <div className="flex items-center gap-2">
        <div>
          <p className="font-medium">{user?.host?.name || "N/A"}</p>
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
  },
  {
    header: "Phone Number",
    accessor: (user) => (
      <span className="text-sm p-2 font-semibold text-base-600">
        {user?.host?.phoneNumber}
      </span>
    ),
  },
  {
    header: "Address",
    accessor: (user) => (
      <span className="text-sm p-2 font-semibold text-base-600">
        {user?.host?.address}
      </span>
    ),
  },
  {
    header: "Status",
    accessor: (user) => (
      <span className="text-sm p-2 font-semibold text-base-600">
        {user?.host?.status}
      </span>
    ),
    sortKey: "location",
  },
];
