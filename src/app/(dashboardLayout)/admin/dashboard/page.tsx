import { Card, CardContent } from "@/components/ui/card";
import { CalendarCheck, UserCheck, Users } from "lucide-react";

const AdminDashboardPage = () => {
  return (
    <div>
      <div className="grid gap-6 md:grid-cols-3">
        {/* Total Users */}
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Users className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Users</p>
              <h3 className="text-2xl font-bold">10</h3>
            </div>
          </CardContent>
        </Card>

        {/* Total Hosts */}
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
              <UserCheck className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Hosts</p>
              <h3 className="text-2xl font-bold">5</h3>
            </div>
          </CardContent>
        </Card>

        {/* Total Event Bookings */}
        <Card className="rounded-2xl shadow-sm">
          <CardContent className="p-6 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
              <CalendarCheck className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">
                Total Event Bookings
              </p>
              <h3 className="text-2xl font-bold">4</h3>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminDashboardPage;
