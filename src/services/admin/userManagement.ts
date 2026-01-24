import { serverFetch } from "@/lib/server-fetch";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const getAllUsers = async (queryString?: string) => {
  try {
    const res = await serverFetch.get("/user?role=USER");
    return res.json();
  } catch (error: any) {
    if (error?.digest?.startsWith("NEXT_REDIRECT")) {
      throw error;
    }
    console.log(error);
    return {
      success: false,
      message: `${
        process.env.NODE_ENV === "development"
          ? error.message
          : "User Get Failed. Please try again."
      }`,
    };
  }
};

export const updateUserStatue = async (
  id: string,
  _currentState: any,
  formData: any,
) => {
  try {
    const status = formData.get("status");

    const res = await serverFetch.patch(`/user/user-status/${id}`, {
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });

    return res.json();
  } catch (error: any) {
    if (error?.digest?.startsWith("NEXT_REDIRECT")) {
      throw error;
    }
    console.log(error);
    return {
      success: false,
      message: `${
        process.env.NODE_ENV === "development"
          ? error.message
          : "User Status Updated Failed. Please try again."
      }`,
    };
  }
};
