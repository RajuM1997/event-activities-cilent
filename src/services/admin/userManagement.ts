import { serverFetch } from "@/lib/server-fetch";

/* eslint-disable @typescript-eslint/no-explicit-any */
export const getAllUsers = async () => {
  try {
    const res = await serverFetch.get("/user");
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
