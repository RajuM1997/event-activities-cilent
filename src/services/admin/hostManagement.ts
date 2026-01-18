import { serverFetch } from "@/lib/server-fetch";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const getHosts = async () => {
  try {
    const res = await serverFetch.get("/user?role=HOST");
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
          : "Event Create Failed. Please try again."
      }`,
    };
  }
};

export const updateHostStatue = async (
  id: string,
  _currentState: any,
  formData: any,
) => {
  try {
    const status = formData.get("status");

    const res = await serverFetch.patch(`/user/host-status/${id}`, {
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
          : "Host Status Updated Failed. Please try again."
      }`,
    };
  }
};
