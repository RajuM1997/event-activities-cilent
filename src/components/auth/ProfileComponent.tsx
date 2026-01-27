import { cn } from "@/lib/utils";
import { IUser } from "@/types/user.interface";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

const ProfileComponent = ({
  user,
  setEditedUser,
}: {
  user: IUser;
  setEditedUser: Dispatch<SetStateAction<IUser | null>>;
}) => {
  return (
    <div>
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          {/* Page Title */}
          <h1 className="text-3xl font-bold mb-8">My Profile</h1>

          {/* Profile Card */}
          {user?.role === "HOST" ? (
            <div className="rounded-2xl border bg-white shadow-sm p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Avatar */}
                <div className="relative h-32 w-32 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center text-4xl font-bold text-gray-600">
                  {user.host?.profilePhoto ? (
                    <Image
                      src={user.host?.profilePhoto}
                      alt={user.host?.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    user.host?.name.charAt(0)
                  )}
                </div>

                {/* Basic Info */}
                <div className="text-center md:text-left">
                  <h2 className="text-2xl font-semibold">{user.host?.name}</h2>
                  <p className="text-gray-500">{user.email}</p>

                  {!user.isDeleted && (
                    <span
                      className={cn(
                        "inline-block mt-2 rounded-full px-4 py-1 text-sm font-medium",
                        {
                          "bg-green-100 text-green-700":
                            user.host?.status === "ACCEPTED",
                          "bg-yellow-100 text-yellow-700":
                            user.host?.status === "PENDING",
                          "bg-red-100 text-red-700":
                            user.host?.status === "REJECTED",
                        },
                      )}
                    >
                      {user.host?.status}
                    </span>
                  )}
                </div>
              </div>

              {/* Divider */}
              <hr className="my-8" />

              {/* Profile Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Bio */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">Bio</h3>
                  <p className="text-gray-700">
                    {user.host?.bio || "No bio added yet."}
                  </p>
                </div>

                {/* Address */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">Address</h3>
                  <p className="text-gray-700">
                    {user.host?.address || "No address added."}
                  </p>
                </div>

                {/* Phone Number */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">Phone Number</h3>
                  <p className="text-gray-700">
                    {user.host?.phoneNumber || "No phone number added."}
                  </p>
                </div>

                {/* Average Rating */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">Average Rating</h3>
                  {user.host?.averageRating ? (
                    <span className="inline-flex items-center gap-2 rounded-full bg-yellow-100 px-4 py-1 text-sm font-medium text-yellow-700">
                      ⭐ {user.host.averageRating.toFixed(1)} / 5
                    </span>
                  ) : (
                    <p className="text-gray-500">No ratings yet.</p>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className="mt-8 flex justify-end">
                <button
                  className="rounded-xl bg-primary px-6 py-3 text-white font-medium hover:bg-primary/90 transition"
                  onClick={() => setEditedUser(user)}
                >
                  Edit Profile
                </button>
              </div>
            </div>
          ) : (
            <div className="rounded-2xl border bg-white shadow-sm p-6 md:p-8">
              <div className="flex flex-col md:flex-row items-center gap-6">
                {/* Avatar */}
                <div className="relative h-32 w-32 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center text-4xl font-bold text-gray-600">
                  {user?.profilePhoto ? (
                    <Image
                      src={user?.profilePhoto}
                      alt={user?.name}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    user?.name.charAt(0)
                  )}
                </div>

                {/* Basic Info */}
                <div className="text-center md:text-left">
                  <h2 className="text-2xl font-semibold">{user?.name}</h2>
                  <p className="text-gray-500">{user.email}</p>

                  {!user.isDeleted && (
                    <span className="inline-block mt-2 rounded-full bg-green-100 px-4 py-1 text-sm font-medium text-green-700">
                      Active Account
                    </span>
                  )}
                </div>
              </div>

              {/* Divider */}
              <hr className="my-8" />

              {/* Profile Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Bio */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">Bio</h3>
                  <p className="text-gray-700">
                    {user?.bio || "No bio added yet."}
                  </p>
                </div>

                {/* Interests */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">Interests</h3>
                  <p className="text-gray-700">
                    {user?.interests || "No interests added."}
                  </p>
                </div>
                {/* City */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">City</h3>
                  <p className="text-gray-700">
                    {user?.location?.city || "No City added."}
                  </p>
                </div>

                {/* Area */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">Area</h3>
                  <p className="text-gray-700">
                    {user?.location?.area || "No area added."}
                  </p>
                </div>

                {/* Country */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">Country</h3>
                  <p className="text-gray-700">
                    {user?.location?.country || "No country added."}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="mt-8 flex justify-end">
                <button
                  className="rounded-xl bg-primary px-6 py-3 text-white font-medium hover:bg-primary/90 transition"
                  onClick={() => setEditedUser(user)}
                >
                  Edit Profile
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProfileComponent;
