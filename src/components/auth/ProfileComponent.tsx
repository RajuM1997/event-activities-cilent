import { IUser } from "@/types/user.interface";
import Image from "next/image";
import React, { Dispatch, SetStateAction } from "react";

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
          <div className="rounded-2xl border bg-white shadow-sm p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              {/* Avatar */}
              <div className="relative h-32 w-32 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center text-4xl font-bold text-gray-600">
                {user.profilePhoto ? (
                  <Image
                    src={user.profilePhoto}
                    alt={user.name}
                    fill
                    className="object-cover"
                  />
                ) : (
                  user.name.charAt(0)
                )}
              </div>

              {/* Basic Info */}
              <div className="text-center md:text-left">
                <h2 className="text-2xl font-semibold">{user.name}</h2>
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
                  {user.bio || "No bio added yet."}
                </p>
              </div>

              {/* Interests */}
              <div>
                <h3 className="text-lg font-semibold mb-2">Interests</h3>
                <p className="text-gray-700">
                  {user.interests || "No interests added."}
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
        </div>
      </section>
    </div>
  );
};

export default ProfileComponent;
